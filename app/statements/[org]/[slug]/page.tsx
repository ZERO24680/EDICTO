type Params = { params: { org: string; slug: string } };

export default async function StatementDetailPage({ params }: Params) {
  const { org, slug } = params;
  let data: any = null;
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || ""}/api/public/statements/by-slug?org=${encodeURIComponent(org)}&slug=${encodeURIComponent(slug)}`, { next: { revalidate: 10 } });
    data = await res.json();
  } catch {}
  const s = data?.statement;

  if (!s) {
    return (
      <main className="max-w-5xl mx-auto px-6 py-10">
        <h1 className="font-[var(--font-eb-garamond)] text-3xl">Statement not found</h1>
      </main>
    );
  }

  return (
    <main className="max-w-5xl mx-auto px-6 py-10 space-y-4">
      <div className="text-sm opacity-70">{s.organization?.name}</div>
      <h1 className="font-[var(--font-eb-garamond)] text-3xl">{s.title}</h1>
      <div className="text-sm opacity-70">{s.publishedAt ? new Date(s.publishedAt).toLocaleString() : "Draft"}</div>
      {s.currentVersion?.hashSha256 && (
        <div className="text-xs">SHA-256: {s.currentVersion.hashSha256}</div>
      )}
      <section className="mt-6">
        <h2 className="font-medium mb-2">Versions</h2>
        <ul className="list-disc ml-5 space-y-1 text-sm">
          {s.versions?.map((v: any) => (
            <li key={v.id}>v{v.versionNumber} — {new Date(v.createdAt).toLocaleString()}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}

