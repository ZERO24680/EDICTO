import { NextResponse } from "next/server";
import { prisma } from "@/app/(lib)/prisma";
import { mockTopics } from "@/app/(lib)/mock";

export async function GET() {
  try {
    const topics = await prisma.topic.findMany({
      orderBy: { name: "asc" },
      include: { _count: { select: { statements: true } } },
    });
    return NextResponse.json({ items: topics });
  } catch {
    return NextResponse.json({ items: mockTopics });
  }
}

