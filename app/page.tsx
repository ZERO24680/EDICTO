import Link from "next/link";
import { topOrganizations } from "@/app/(lib)/mock";

async function fetchLatest(): Promise<any[]> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || ""}/api/public/statements?pageSize=6`, { next: { revalidate: 60 } });
    const data = await res.json();
    return data.items || [];
  } catch {
    return [];
  }
}

export default async function Home() {
  const latest = await fetchLatest();
  const themes = [
    { name: "Énergie", slug: "energie" },
    { name: "Finance", slug: "finance" },
    { name: "Santé", slug: "sante" },
    { name: "Tech", slug: "tech" },
    { name: "Justice", slug: "justice" },
    { name: "Environnement", slug: "environnement" },
  ];
  const popularOrgs = topOrganizations(6);

  return (
    <main>
      {/* Hero */}
      <section className="px-6 py-16 md:py-24 bg-[var(--navy)] text-[var(--ivory)]">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="font-[var(--font-eb-garamond)] text-4xl md:text-6xl tracking-tight mb-4">EDICTO</h1>
          <p className="text-lg md:text-xl opacity-90">The official register of verified statements.</p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <Link href="/org/create" className="px-5 py-3 rounded-md bg-[var(--gold)] text-[var(--navy)] font-medium">Create a verified profile</Link>
            <Link href="/search" className="px-5 py-3 rounded-md border border-white/20">Browse statements</Link>
          </div>
          <form action="/search" className="mt-8 max-w-2xl mx-auto flex bg-white rounded shadow overflow-hidden">
            <input name="q" placeholder="Search statements..." className="flex-1 px-4 py-3 text-black outline-none" />
            <button className="px-4 py-3 bg-[var(--gold)] text-[var(--navy)] font-medium">Search</button>
          </form>
        </div>
      </section>

      {/* Themes */}
      <section className="px-6 py-10">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-[var(--font-eb-garamond)] text-2xl mb-4">Themes</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {themes.map((t) => (
              <Link key={t.slug} href={`/topics/${t.slug}`} className="border rounded px-3 py-2 hover:bg-white/20">
                {t.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Popular organizations */}
      <section className="px-6 py-6 bg-white/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-[var(--font-eb-garamond)] text-2xl mb-4">Organizations most followed</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {popularOrgs.map((o) => (
              <Link key={o.slug} href={`/org/${o.slug}`} className="border rounded p-3 flex items-center gap-3 hover:bg-white">
                {/* Logo */}
                <div className="w-10 h-10 rounded bg-white border grid place-items-center overflow-hidden">
                  {/* fallback monogram if no logo */}
                  {o.logoUrl ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={o.logoUrl} alt={o.name} className="max-w-full max-h-full" />
                  ) : (
                    <span className="text-sm font-medium">{o.name.slice(0,1)}</span>
                  )}
                </div>
                <div className="flex-1">
                  <div className="font-medium">{o.name}</div>
                  <div className="text-xs opacity-70">{o.followerCount.toLocaleString()} followers</div>
                </div>
                <span className="text-xs px-2 py-1 rounded bg-black/5">Follow</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Latest statements */}
      <section className="px-6 py-10">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-[var(--font-eb-garamond)] text-2xl mb-4">Latest statements</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {latest.length === 0 && <p>No statements yet.</p>}
            {latest.map((s) => (
              <article key={s.id} className="border rounded p-4 bg-white/40">
                <div className="text-sm opacity-80">{s.organization?.name}</div>
                <h3 className="text-lg font-medium">{s.title}</h3>
                <div className="text-sm opacity-70">{s.publishedAt ? new Date(s.publishedAt).toLocaleDateString() : "Draft"}</div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
