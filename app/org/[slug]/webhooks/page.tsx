type Params = { params: { slug: string } };

export default function OrgWebhooksPage({ params }: Params) {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16 space-y-6">
      <h1 className="font-[var(--font-eb-garamond)] text-3xl">Webhooks — {params.slug}</h1>
      <p>Manage webhook endpoints for events (statement.published, statement.updated).</p>
    </main>
  );
}

