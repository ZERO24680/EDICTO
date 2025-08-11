import NextAuth, { NextAuthOptions } from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/app/(lib)/prisma";
import EmailProvider from "next-auth/providers/email";
import { Resend } from "resend";
import nodemailer from "nodemailer";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma) as any,
  session: { strategy: "database" },
  providers: [
    EmailProvider({
      server: process.env.RESEND_SMTP_URL || undefined,
      from: process.env.RESEND_FROM || "no-reply@edicto.local",
      sendVerificationRequest: async ({ identifier, url, provider, theme }) => {
        const apiKey = process.env.RESEND_API_KEY;
        if (apiKey) {
          const resend = new Resend(apiKey);
          const { host } = new URL(url);
          const brandColor = theme?.brandColor || "#0B1B2B";
          const html = `
            <div style="font-family:Arial,sans-serif;">
              <h2 style="color:${brandColor};margin:0 0 12px;">Sign in to ${host}</h2>
              <p><a href="${url}" style="background:#C6A15B;color:#0B1B2B;padding:10px 16px;border-radius:6px;text-decoration:none;font-weight:600;">Sign in</a></p>
              <p style="color:#666">If you did not request this email you can safely ignore it.</p>
            </div>`;
          await resend.emails.send({ to: identifier, from: provider.from as string, subject: `Sign in to ${host}`, html });
          return;
        }
        if (process.env.ETHEREAL === "1") {
          const testAccount = await nodemailer.createTestAccount();
          const transporter = nodemailer.createTransport({
            host: "smtp.ethereal.email",
            port: 587,
            auth: { user: testAccount.user, pass: testAccount.pass },
          });
          const info = await transporter.sendMail({ to: identifier, from: provider.from as string, subject: `Sign in to ${host}`, html: `Sign in: <a href="${url}">Open link</a>` });
          console.log("Ethereal preview:", nodemailer.getTestMessageUrl(info));
          return;
        }
        // Dev fallback: log magic link and store in DB for quick copy
        console.log(`[Magic Link for ${identifier}] ${url}`);
        try {
          await prisma.magicLinkLog.create({ data: { email: identifier, url } });
        } catch {}
      },
    }),
    ...((process.env.DEV_AUTH === "1" || process.env.NODE_ENV !== "production")
      ? [
          CredentialsProvider({
            name: "Dev",
            credentials: { email: { label: "Email", type: "email" } },
            async authorize(credentials) {
              const email = credentials?.email as string | undefined;
              if (!email) return null;
              // Ensure user exists
              const user = await prisma.user.upsert({
                where: { email },
                update: {},
                create: { email },
              });
              return { id: user.id, email: user.email, name: user.name || null } as any;
            },
          }),
        ]
      : []),
  ],
  pages: {
    signIn: "/login",
    verifyRequest: "/login?sent=1",
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };

// Ensure Node.js runtime (required for nodemailer in NextAuth Email provider)
export const runtime = "nodejs";

