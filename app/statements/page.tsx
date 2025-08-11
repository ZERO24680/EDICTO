export default async function StatementsPage() {
  let items: any[] = [];
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || ""}/api/public/statements?pageSize=20`, { next: { revalidate: 10 } });
    const data = await res.json();
    items = data.items || [];
  } catch {}

  return (
    <main className="max-w-6xl mx-auto px-6 py-10 space-y-6">
      <h1 className="font-[var(--font-eb-garamond)] text-3xl">Explore</h1>
      <div className="grid md:grid-cols-2 gap-4">
        {items.length === 0 && <p>No statements yet.</p>}
        {items.map((s) => (
          <article key={s.id} className="border rounded p-4 bg-white/40">
            <div className="text-sm opacity-80">{s.organization?.name}</div>
            <h3 className="text-lg font-medium">{s.title}</h3>
            <div className="text-sm opacity-70">{s.publishedAt ? new Date(s.publishedAt).toLocaleDateString() : "Draft"}</div>
          </article>
        ))}
      </div>
    </main>
  );
}

