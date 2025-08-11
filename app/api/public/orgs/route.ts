import { NextResponse } from "next/server";
import { prisma } from "@/app/(lib)/prisma";
import { mockOrganizations } from "@/app/(lib)/mock";

export async function GET() {
  try {
    const orgs = await prisma.organization.findMany({
      orderBy: { name: "asc" },
      select: { id: true, name: true, slug: true, verificationStatus: true, verifiedAt: true, logoUrl: true, website: true },
    });
    return NextResponse.json({ items: orgs });
  } catch {
    return NextResponse.json({ items: mockOrganizations });
  }
}

