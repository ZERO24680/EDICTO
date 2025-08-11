export default function RssInfoPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16 space-y-6">
      <h1 className="font-[var(--font-eb-garamond)] text-4xl">RSS Feeds</h1>
      <ul className="list-disc ml-5">
        <li>/api/public/rss/org/[slug].xml</li>
        <li>/api/public/rss/topic/[slug].xml</li>
        <li>/api/public/rss/search/[id].xml</li>
      </ul>
    </main>
  );
}

