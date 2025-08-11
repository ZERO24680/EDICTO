import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/app/(lib)/prisma";
import { sha256Hex } from "@/app/(lib)/hash";

type Body = {
  organizationSlug: string;
  title: string;
  contentMarkdown?: string;
  contentText?: string;
  pdfUrl?: string;
  topics?: string[];
  tags?: string[];
  language?: string;
};

export async function POST(req: NextRequest) {
  const body = (await req.json()) as Body;
  const {
    organizationSlug,
    title,
    contentMarkdown,
    contentText,
    pdfUrl,
    topics = [],
    tags = [],
    language = "en",
  } = body;

  if (!organizationSlug || !title || !(contentMarkdown || contentText)) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  const org = await prisma.organization.findUnique({ where: { slug: organizationSlug } });
  if (!org) return NextResponse.json({ error: "Organization not found" }, { status: 404 });

  const normalizedText = contentText ?? contentMarkdown ?? "";
  const hash = await sha256Hex(normalizedText);

  const statement = await prisma.statement.create({
    data: {
      organizationId: org.id,
      slug: title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""),
      title,
      language,
      status: "PUBLISHED",
      publishedAt: new Date(),
      versions: {
        create: {
          versionNumber: 1,
          contentMarkdown,
          contentText: normalizedText,
          pdfUrl,
          hashSha256: hash,
        },
      },
    },
    include: { versions: true },
  });

  await prisma.statement.update({
    where: { id: statement.id },
    data: { currentVersionId: statement.versions[0]?.id },
  });

  return NextResponse.json({ id: statement.id, slug: statement.slug, hash });
}

