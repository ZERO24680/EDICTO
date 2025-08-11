import { NextResponse } from "next/server";
import { prisma } from "@/app/(lib)/prisma";

export async function GET(_: Request, { params }: { params: { slug: string } }) {
  const slug = params.slug;
  try {
    const items = await prisma.statement.findMany({
      where: { organization: { slug } },
      orderBy: { publishedAt: "desc" },
      take: 20,
      include: { organization: true },
    });
    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"><channel>
<title>EDICTO — ${slug} statements</title>
<link>${process.env.NEXT_PUBLIC_BASE_URL || ""}/org/${slug}</link>
<description>Latest statements</description>
${items
  .map(
    (s) => `<item><title>${escapeXml(s.title)}</title><link>${process.env.NEXT_PUBLIC_BASE_URL || ""}/statements/${s.organization.slug}/${s.slug}</link><pubDate>${s.publishedAt?.toUTCString?.() || new Date().toUTCString()}</pubDate></item>`
  )
  .join("")}
</channel></rss>`;
    return new NextResponse(xml, { headers: { "Content-Type": "application/rss+xml" } });
  } catch {
    return new NextResponse(emptyFeed(slug), { headers: { "Content-Type": "application/rss+xml" } });
  }
}

function escapeXml(s: string) { return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"); }
function emptyFeed(slug: string) {
  return `<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel><title>EDICTO — ${slug}</title></channel></rss>`;
}

