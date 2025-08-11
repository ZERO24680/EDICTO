export default function BrandPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16 space-y-6">
      <h1 className="font-[var(--font-eb-garamond)] text-4xl">Brand Assets</h1>
      <p>Download the EDICTO mark and wordmark.</p>
      <ul className="list-disc ml-5">
        <li><a className="underline" href="/edicto-mark.svg">Monogram</a></li>
        <li><a className="underline" href="/edicto-wordmark.svg">Wordmark</a></li>
      </ul>
    </main>
  );
}

