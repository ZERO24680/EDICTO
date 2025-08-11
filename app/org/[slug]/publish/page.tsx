type Params = { params: { slug: string } };

export default function OrgPublishPage({ params }: Params) {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16 space-y-6">
      <h1 className="font-[var(--font-eb-garamond)] text-3xl">Publish — {params.slug}</h1>
      <p>Markdown editor and PDF upload to be implemented.</p>
    </main>
  );
}

