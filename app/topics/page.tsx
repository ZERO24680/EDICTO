import Link from "next/link";

export default async function TopicsIndexPage() {
  let topics: any[] = [];
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || ""}/api/public/topics`, { next: { revalidate: 30 } });
    const data = await res.json();
    topics = data.items || [];
  } catch {}

  return (
    <main className="max-w-5xl mx-auto px-6 py-10 space-y-6">
      <h1 className="font-[var(--font-eb-garamond)] text-3xl">Topics</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {topics.map((t) => (
          <Link key={t.slug} href={`/topics/${t.slug}`} className="border rounded px-3 py-2 hover:bg-white/20">
            <div className="font-medium">{t.name}</div>
            <div className="text-sm opacity-70">{t._count?.statements ?? 0} statements</div>
          </Link>
        ))}
      </div>
    </main>
  );
}

