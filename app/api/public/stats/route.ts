import { NextResponse } from "next/server";
import { prisma } from "@/app/(lib)/prisma";
import { mockStats } from "@/app/(lib)/mock";

export async function GET() {
  try {
    const [statements, organizations, users, topics] = await Promise.all([
      prisma.statement.count(),
      prisma.organization.count({ where: { verificationStatus: "VERIFIED" } }),
      prisma.user.count(),
      prisma.topic.count(),
    ]);
    return NextResponse.json({ statements, organizations, users, topics });
  } catch {
    return NextResponse.json(mockStats);
  }
}

