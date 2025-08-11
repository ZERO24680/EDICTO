import { NextResponse } from "next/server";
import { prisma } from "@/app/(lib)/prisma";

export const runtime = "nodejs";

export async function GET() {
  try {
    // Use raw SQL to avoid relying on generated Prisma model
    const rows: Array<{ url: string; email: string; createdAt: string }> = await prisma.$queryRawUnsafe(
      'SELECT "url", "email", "createdAt" FROM "MagicLinkLog" ORDER BY "createdAt" DESC LIMIT 1'
    );
    const row = rows?.[0];
    if (!row) return NextResponse.json({ url: null }, { status: 404 });
    return NextResponse.json(row);
  } catch (e) {
    return NextResponse.json({ error: "Not available", detail: String(e) }, { status: 500 });
  }
}

