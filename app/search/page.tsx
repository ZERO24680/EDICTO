import Link from "next/link";

type SearchParams = { searchParams: { q?: string } };

export default async function SearchPage({ searchParams }: SearchParams) {
  const q = searchParams.q || "";
  let items: any[] = [];
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || ""}/api/public/statements?query=${encodeURIComponent(q)}&pageSize=20`, { next: { revalidate: 10 } });
    const data = await res.json();
    items = data.items || [];
  } catch {}

  return (
    <main className="max-w-5xl mx-auto px-6 py-10 space-y-6">
      <h1 className="font-[var(--font-eb-garamond)] text-3xl">Search</h1>
      <form action="/search" className="flex bg-white rounded shadow overflow-hidden">
        <input name="q" defaultValue={q} placeholder="Search statements..." className="flex-1 px-4 py-3 text-black outline-none" />
        <button className="px-4 py-3 bg-[var(--gold)] text-[var(--navy)] font-medium">Search</button>
      </form>

      <div className="grid md:grid-cols-2 gap-4">
        {items.length === 0 && <p>No results.</p>}
        {items.map((s) => (
          <article key={s.id} className="border rounded p-4 bg-white/40">
            <div className="text-sm opacity-80">{s.organization?.name}</div>
            <h3 className="text-lg font-medium">{s.title}</h3>
            <div className="text-sm opacity-70">{s.publishedAt ? new Date(s.publishedAt).toLocaleDateString() : "Draft"}</div>
          </article>
        ))}
      </div>

      <div className="pt-6">
        <Link href="/" className="underline">Back to Home</Link>
      </div>
    </main>
  );
}

