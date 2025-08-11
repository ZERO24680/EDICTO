type Params = { params: { slug: string } };

export default async function OrgPublicPage({ params }: Params) {
  const { slug } = params;
  let org: any = null;
  let items: any[] = [];
  try {
    const [orgRes, stRes] = await Promise.all([
      fetch(`${process.env.NEXT_PUBLIC_BASE_URL || ""}/api/public/orgs`),
      fetch(`${process.env.NEXT_PUBLIC_BASE_URL || ""}/api/public/statements?org=${encodeURIComponent(slug)}&pageSize=20`),
    ]);
    const orgs = await orgRes.json();
    org = (orgs.items || []).find((o: any) => o.slug === slug) || null;
    const st = await stRes.json();
    items = st.items || [];
  } catch {}

  if (!org) {
    return (
      <main className="max-w-5xl mx-auto px-6 py-10">
        <h1 className="font-[var(--font-eb-garamond)] text-3xl">Organization not found</h1>
      </main>
    );
  }

  const verified = org.verificationStatus === "VERIFIED";

  return (
    <main className="max-w-6xl mx-auto px-6 py-10 space-y-6">
      <header className="space-y-1">
        <h1 className="font-[var(--font-eb-garamond)] text-3xl flex items-center gap-2">
          {org.name} {verified && <span className="text-xs px-2 py-1 rounded bg-green-100 text-green-800">Verified</span>}
        </h1>
        {org.website && (
          <a className="underline text-sm" href={org.website} target="_blank">{org.website}</a>
        )}
      </header>
      <section>
        <h2 className="font-medium mb-3">Statements</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {items.length === 0 && <p>No statements yet.</p>}
          {items.map((s) => (
            <article key={s.id} className="border rounded p-4 bg-white/40">
              <div className="text-sm opacity-80">{org.name}</div>
              <h3 className="text-lg font-medium">{s.title}</h3>
              <div className="text-sm opacity-70">{s.publishedAt ? new Date(s.publishedAt).toLocaleDateString() : "Draft"}</div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

