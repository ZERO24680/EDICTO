import { NextResponse } from "next/server";
import { prisma } from "@/app/(lib)/prisma";

export async function GET(_: Request, { params }: { params: { id: string } }) {
  const id = params.id;
  try {
    const saved = await prisma.savedSearch.findUnique({ where: { id } });
    const q = (saved?.queryJson as any)?.q || "";
    const items = await prisma.statement.findMany({
      where: q ? { OR: [{ title: { contains: q, mode: "insensitive" } }, { summaryAI: { contains: q, mode: "insensitive" } }] } : {},
      orderBy: { publishedAt: "desc" },
      take: 20,
      include: { organization: true },
    });
    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"><channel>
<title>EDICTO — Search ${escapeXml(q)}</title>
<link>${process.env.NEXT_PUBLIC_BASE_URL || ""}/search?q=${encodeURIComponent(q)}</link>
<description>Latest results</description>
${items
  .map(
    (s) => `<item><title>${escapeXml(s.title)}</title><link>${process.env.NEXT_PUBLIC_BASE_URL || ""}/statements/${s.organization.slug}/${s.slug}</link><pubDate>${s.publishedAt?.toUTCString?.() || new Date().toUTCString()}</pubDate></item>`
  )
  .join("")}
</channel></rss>`;
    return new NextResponse(xml, { headers: { "Content-Type": "application/rss+xml" } });
  } catch {
    return new NextResponse(emptyFeed(id), { headers: { "Content-Type": "application/rss+xml" } });
  }
}

function escapeXml(s: string) { return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"); }
function emptyFeed(id: string) {
  return `<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel><title>EDICTO — Search ${id}</title></channel></rss>`;
}

