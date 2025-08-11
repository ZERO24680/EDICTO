import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/app/(lib)/prisma";
import { filterStatements } from "@/app/(lib)/mock";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get("query") || undefined;
  const orgSlug = searchParams.get("org") || undefined;
  const topicSlug = searchParams.get("topic") || undefined;
  const page = Number(searchParams.get("page") || 1);
  const take = Number(searchParams.get("pageSize") || 20);
  const skip = (page - 1) * take;

  const where = {
    AND: [
      query
        ? {
            OR: [
              { title: { contains: query, mode: "insensitive" } },
              { summaryAI: { contains: query, mode: "insensitive" } },
            ],
          }
        : {},
      orgSlug ? { organization: { slug: orgSlug } } : {},
      topicSlug
        ? { topics: { some: { topic: { slug: topicSlug } } } }
        : {},
    ],
  } as const;

  try {
    const [items, total] = await Promise.all([
      prisma.statement.findMany({
        where,
        orderBy: [{ publishedAt: "desc" }, { createdAt: "desc" }],
        take,
        skip,
        include: {
          organization: { select: { id: true, name: true, slug: true } },
          currentVersion: { select: { id: true, versionNumber: true, hashSha256: true, createdAt: true } },
          topics: { include: { topic: true } },
        },
      }),
      prisma.statement.count({ where }),
    ]);

    return NextResponse.json({ items, total, page, pageSize: take });
  } catch (e) {
    // Mock fallback
    const items = filterStatements({ query, orgSlug, topicSlug }).slice(skip, skip + take);
    const total = filterStatements({ query, orgSlug, topicSlug }).length;
    return NextResponse.json({ items, total, page, pageSize: take });
  }
}

