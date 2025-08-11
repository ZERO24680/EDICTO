/* eslint-disable no-console */
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Seed minimal fixtures (orgs, topics) for demo
  const topics = [
    { name: "Énergie", slug: "energie" },
    { name: "Finance", slug: "finance" },
    { name: "Santé", slug: "sante" },
    { name: "Tech", slug: "tech" },
    { name: "Justice", slug: "justice" },
    { name: "Environnement", slug: "environnement" },
  ];

  await prisma.topic.createMany({ data: topics, skipDuplicates: true });

  const orgs = [
    { name: "EDF", slug: "edf", website: "https://edf.com", verificationStatus: "VERIFIED" },
    { name: "TotalEnergies", slug: "totalenergies", website: "https://totalenergies.com", verificationStatus: "PENDING" },
    { name: "CNIL", slug: "cnil", website: "https://cnil.fr", verificationStatus: "VERIFIED" },
    { name: "Banque de France", slug: "banque-de-france", website: "https://banque-france.fr", verificationStatus: "VERIFIED" },
    { name: "Airbus", slug: "airbus", website: "https://airbus.com", verificationStatus: "PENDING" },
  ] as const;

  await prisma.organization.createMany({ data: orgs as any, skipDuplicates: true });

  const userFree = await prisma.user.upsert({
    where: { email: "free@example.com" },
    update: {},
    create: { email: "free@example.com", plan: "FREE", locale: "fr" },
  });

  const userPro = await prisma.user.upsert({
    where: { email: "pro@example.com" },
    update: {},
    create: { email: "pro@example.com", plan: "PRO", locale: "en" },
  });

  const edf = await prisma.organization.findUniqueOrThrow({ where: { slug: "edf" } });

  const st = await prisma.statement.upsert({
    where: { organizationId_slug: { organizationId: edf.id, slug: "maintenance-reseau" } },
    update: {},
    create: {
      organizationId: edf.id,
      slug: "maintenance-reseau",
      title: "EDF annonce une maintenance réseau",
      status: "PUBLISHED",
      publishedAt: new Date(),
      versions: {
        create: {
          versionNumber: 1,
          contentText: "EDF effectuera une maintenance planifiée du réseau ce week-end.",
          hashSha256: "placeholder",
        },
      },
    },
    include: { versions: true },
  });

  await prisma.statement.update({
    where: { id: st.id },
    data: { currentVersionId: st.versions[0]?.id },
  });

  await prisma.follow.upsert({
    where: { userId_organizationId: { userId: userFree.id, organizationId: edf.id } },
    update: {},
    create: { userId: userFree.id, organizationId: edf.id },
  });

  console.log("Seed complete");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
}).finally(async () => {
  await prisma.$disconnect();
});

