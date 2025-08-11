import { NextResponse } from "next/server";
import { prisma } from "@/app/(lib)/prisma";

export const runtime = "nodejs";

export async function GET() {
  try {
    const rows: Array<{ identifier: string; token: string; expires: string }> = await prisma.$queryRawUnsafe(
      'SELECT "identifier", "token", "expires" FROM "VerificationToken" ORDER BY "expires" DESC LIMIT 1'
    );
    const row = rows?.[0];
    if (!row) return NextResponse.json({ url: null }, { status: 404 });
    const base = process.env.NEXTAUTH_URL || process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
    const callbackUrl = `${base}/onboarding/user/preferences`;
    const url = `${base}/api/auth/callback/email?callbackUrl=${encodeURIComponent(callbackUrl)}&token=${encodeURIComponent(
      row.token
    )}&email=${encodeURIComponent(row.identifier)}`;
    return NextResponse.json({ url, email: row.identifier, expires: row.expires });
  } catch (e) {
    return NextResponse.json({ error: "Not available", detail: String(e) }, { status: 500 });
  }
}

