type Params = { params: { slug: string } };

export default function OrgApiPage({ params }: Params) {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16 space-y-6">
      <h1 className="font-[var(--font-eb-garamond)] text-3xl">API — {params.slug}</h1>
      <p>Issue API keys and show docs for publish endpoint.</p>
    </main>
  );
}

