/* Mock data for frontend development when DB is not configured */

export type MockOrganization = {
  id: string;
  name: string;
  slug: string;
  logoUrl?: string;
  verificationStatus: "PENDING" | "VERIFIED" | "REJECTED";
  verifiedAt?: string | null;
  website?: string | null;
};

export type MockTopic = {
  id: string;
  name: string;
  slug: string;
};

export type MockStatementVersion = {
  id: string;
  versionNumber: number;
  createdAt: string;
  hashSha256: string;
  contentText: string;
};

export type MockStatement = {
  id: string;
  organization: MockOrganization;
  organizationId: string;
  slug: string;
  title: string;
  summaryAI?: string | null;
  language: string;
  status: "PUBLISHED" | "DRAFT" | "RETIRED";
  publishedAt?: string | null;
  createdAt: string;
  currentVersion?: MockStatementVersion | null;
  versions?: MockStatementVersion[];
  topics?: { topic: MockTopic }[];
  tags?: { tag: { id: string; name: string; slug: string } }[];
};

const now = new Date();
const daysAgo = (d: number) => new Date(now.getTime() - d * 86400000).toISOString();

export const mockOrganizations: MockOrganization[] = [
  { id: "org_edf", name: "EDF", slug: "edf", logoUrl: "/logos/edf.svg", verificationStatus: "VERIFIED", verifiedAt: daysAgo(60), website: "https://edf.com" },
  { id: "org_cnil", name: "CNIL", slug: "cnil", logoUrl: "/logos/cnil.svg", verificationStatus: "VERIFIED", verifiedAt: daysAgo(120), website: "https://cnil.fr" },
  { id: "org_bdf", name: "Banque de France", slug: "banque-de-france", logoUrl: "/logos/banque-de-france.svg", verificationStatus: "VERIFIED", verifiedAt: daysAgo(200), website: "https://banque-france.fr" },
  { id: "org_total", name: "TotalEnergies", slug: "totalenergies", logoUrl: "/logos/totalenergies.svg", verificationStatus: "PENDING", website: "https://totalenergies.com" },
  { id: "org_airbus", name: "Airbus", slug: "airbus", logoUrl: "/logos/airbus.svg", verificationStatus: "PENDING", website: "https://airbus.com" },
];

export const mockTopics: MockTopic[] = [
  { id: "t_energy", name: "Énergie", slug: "energie" },
  { id: "t_finance", name: "Finance", slug: "finance" },
  { id: "t_health", name: "Santé", slug: "sante" },
  { id: "t_tech", name: "Tech", slug: "tech" },
  { id: "t_justice", name: "Justice", slug: "justice" },
  { id: "t_env", name: "Environnement", slug: "environnement" },
];

const makeVersion = (n: number, content: string): MockStatementVersion => ({
  id: `v_${n}_${Math.random().toString(36).slice(2, 6)}`,
  versionNumber: n,
  createdAt: daysAgo(7 - n),
  hashSha256: "mockhash" + n.toString().padStart(2, "0"),
  contentText: content,
});

export const mockStatements: MockStatement[] = [
  {
    id: "st_edf_maint",
    organization: mockOrganizations[0],
    organizationId: mockOrganizations[0].id,
    slug: "maintenance-reseau",
    title: "EDF annonce une maintenance réseau",
    summaryAI: "Maintenance planifiée du réseau électrique ce week-end.",
    language: "fr",
    status: "PUBLISHED",
    publishedAt: daysAgo(2),
    createdAt: daysAgo(2),
    versions: [makeVersion(1, "Maintenance planifiée."), makeVersion(2, "Maintenance planifiée étendue.")],
    currentVersion: makeVersion(2, "Maintenance planifiée étendue."),
    topics: [{ topic: mockTopics[0] }],
  },
  {
    id: "st_cnil_sanction",
    organization: mockOrganizations[1],
    organizationId: mockOrganizations[1].id,
    slug: "sanction-rgpd",
    title: "CNIL prononce une sanction RGPD",
    summaryAI: "Décision de sanction au titre du RGPD.",
    language: "fr",
    status: "PUBLISHED",
    publishedAt: daysAgo(5),
    createdAt: daysAgo(5),
    versions: [makeVersion(1, "Sanction RGPD." )],
    currentVersion: makeVersion(1, "Sanction RGPD."),
    topics: [{ topic: mockTopics[1] }],
  },
  {
    id: "st_bdf_inflation",
    organization: mockOrganizations[2],
    organizationId: mockOrganizations[2].id,
    slug: "note-inflation",
    title: "Banque de France publie une note sur l'inflation",
    language: "fr",
    status: "PUBLISHED",
    publishedAt: daysAgo(1),
    createdAt: daysAgo(1),
    versions: [makeVersion(1, "Note sur l'inflation." )],
    currentVersion: makeVersion(1, "Note sur l'inflation."),
    topics: [{ topic: mockTopics[1] }],
  },
  {
    id: "st_total_q2",
    organization: mockOrganizations[3],
    organizationId: mockOrganizations[3].id,
    slug: "resultats-q2",
    title: "TotalEnergies publie ses résultats Q2",
    language: "fr",
    status: "PUBLISHED",
    publishedAt: daysAgo(3),
    createdAt: daysAgo(3),
    versions: [makeVersion(1, "Résultats Q2." )],
    currentVersion: makeVersion(1, "Résultats Q2."),
    topics: [{ topic: mockTopics[0] }],
  },
  {
    id: "st_airbus_cmd",
    organization: mockOrganizations[4],
    organizationId: mockOrganizations[4].id,
    slug: "commande-a320",
    title: "Airbus annonce une commande d'A320",
    language: "fr",
    status: "PUBLISHED",
    publishedAt: daysAgo(4),
    createdAt: daysAgo(4),
    versions: [makeVersion(1, "Commande A320.")],
    currentVersion: makeVersion(1, "Commande A320."),
    topics: [{ topic: mockTopics[3] }],
  },
  {
    id: "st_edf_transition",
    organization: mockOrganizations[0],
    organizationId: mockOrganizations[0].id,
    slug: "transition-energetique",
    title: "EDF détaille sa stratégie de transition énergétique",
    language: "fr",
    status: "PUBLISHED",
    publishedAt: daysAgo(0.5),
    createdAt: daysAgo(0.5),
    versions: [makeVersion(1, "Stratégie.")],
    currentVersion: makeVersion(1, "Stratégie."),
    topics: [{ topic: mockTopics[0] }, { topic: mockTopics[5] }],
  },
];

export const mockStats = {
  statements: mockStatements.length,
  organizations: mockOrganizations.filter((o) => o.verificationStatus === "VERIFIED").length,
  users: 2,
  topics: mockTopics.length,
};

export function filterStatements({ query, orgSlug, topicSlug }: { query?: string; orgSlug?: string; topicSlug?: string }) {
  let items = [...mockStatements];
  if (orgSlug) items = items.filter((s) => s.organization.slug === orgSlug);
  if (topicSlug) items = items.filter((s) => (s.topics || []).some((t) => t.topic.slug === topicSlug));
  if (query) {
    const q = query.toLowerCase();
    items = items.filter((s) => s.title.toLowerCase().includes(q) || (s.summaryAI || "").toLowerCase().includes(q));
  }
  items.sort((a, b) => (new Date(b.publishedAt || b.createdAt).getTime() - new Date(a.publishedAt || a.createdAt).getTime()));
  return items;
}

// Mock follower counts per organization slug
export const mockOrgFollowers: Record<string, number> = {
  edf: 12800,
  cnil: 9200,
  "banque-de-france": 7400,
  totalenergies: 6800,
  airbus: 6100,
};

export function topOrganizations(limit = 6) {
  const withCounts = mockOrganizations.map((o) => ({
    ...o,
    followerCount: mockOrgFollowers[o.slug] ?? 3000,
  }));
  withCounts.sort((a, b) => (b.followerCount - a.followerCount));
  return withCounts.slice(0, limit);
}

