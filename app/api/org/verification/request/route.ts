import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/app/(lib)/prisma";

export async function POST(req: NextRequest) {
  const { name, website, contactEmail } = (await req.json()) as {
    name?: string;
    website?: string;
    contactEmail?: string;
  };
  if (!name || !website || !contactEmail) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  const domain = new URL(website).hostname.replace(/^www\./, "");
  const slug = name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

  // Upsert org, create verification request and DNS token
  const org = await prisma.organization.upsert({
    where: { slug },
    update: { website },
    create: { name, slug, website },
  });

  const dnsToken = Math.random().toString(36).slice(2, 10);
  await prisma.orgDomain.upsert({
    where: { organizationId_domain: { organizationId: org.id, domain } },
    update: { dnsToken },
    create: { organizationId: org.id, domain, dnsToken },
  });

  await prisma.verificationRequest.create({
    data: { organizationId: org.id, contactEmail },
  });

  return NextResponse.json({
    organization: { id: org.id, slug: org.slug, name: org.name },
    dns: { type: "TXT", host: `_edicto.${domain}`, value: dnsToken },
    next: "Add the DNS record and confirm via email. Admin will review.",
  });
}

