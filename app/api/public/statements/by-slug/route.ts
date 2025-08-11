import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/app/(lib)/prisma";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const org = searchParams.get("org") || "";
  const slug = searchParams.get("slug") || "";
  if (!org || !slug) return NextResponse.json({ error: "Missing org or slug" }, { status: 400 });

  try {
    const statement = await prisma.statement.findFirst({
      where: { slug, organization: { slug: org } },
      include: {
        organization: { select: { id: true, name: true, slug: true, logoUrl: true } },
        versions: { orderBy: { versionNumber: "asc" } },
        currentVersion: true,
        topics: { include: { topic: true } },
        tags: { include: { tag: true } },
      },
    });
    if (!statement) return NextResponse.json({ error: "Not found" }, { status: 404 });
    return NextResponse.json({ statement });
  } catch {
    return NextResponse.json({ statement: null });
  }
}

