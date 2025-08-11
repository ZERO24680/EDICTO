type Params = { params: { slug: string } };

export default function OrgDashboardPage({ params }: Params) {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16 space-y-6">
      <h1 className="font-[var(--font-eb-garamond)] text-3xl">Org Dashboard — {params.slug}</h1>
      <p>Publish and manage statements (requires org auth).</p>
    </main>
  );
}

