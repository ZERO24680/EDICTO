import { getServerSession } from 'next-auth'
import type { NextAuthOptions } from 'next-auth'
import { PrismaAdapter } from '@auth/prisma-adapter'
import { prisma } from '@/app/(lib)/prisma'
import EmailProvider from 'next-auth/providers/email'
import CredentialsProvider from 'next-auth/providers/credentials'

const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    EmailProvider({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: process.env.EMAIL_SERVER_PORT ? parseInt(process.env.EMAIL_SERVER_PORT) : undefined,
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD,
        },
      },
      from: process.env.EMAIL_FROM,
      sendVerificationRequest: async ({ identifier, url }) => {
        // In development, log the magic link to console
        if (process.env.NODE_ENV === 'development') {
          console.log('Magic link:', url)
          
          // Save to database for dev access
          try {
            await prisma.magicLinkLog.create({
              data: {
                email: identifier,
                url,
              },
            })
          } catch (error) {
            console.log('Could not save magic link to DB:', error)
          }
        }
        
        // For production, use Resend or other email service
        if (process.env.RESEND_API_KEY) {
          // TODO: Implement Resend email sending
          console.log('Would send email via Resend:', url)
        }
      },
    }),
    // Developer-friendly credentials provider for local development
    ...(process.env.DEV_AUTH === '1' ? [
      CredentialsProvider({
        name: 'Developer',
        credentials: {
          email: { label: 'Email', type: 'email' },
        },
        async authorize(credentials) {
          if (!credentials?.email) return null
          
          // Create or get user
          let user = await prisma.user.findUnique({
            where: { email: credentials.email },
          })
          
          if (!user) {
            user = await prisma.user.create({
              data: {
                email: credentials.email,
                name: credentials.email.split('@')[0],
                plan: 'FREE',
                locale: 'en',
              },
            })
          }
          
          return user
        },
      })
    ] : []),
  ],
  pages: {
    signIn: '/login',
  },
  callbacks: {
    async session({ session, user }) {
      // Add user ID to session if available
      if (session.user && typeof user === 'object' && user !== null && 'id' in user) {
        (session.user as { id?: string }).id = user.id as string
      }
      return session
    },
  },
  session: {
    strategy: 'jwt',
  },
}

export async function getSession() {
  return getServerSession(authOptions)
}

export { authOptions }

