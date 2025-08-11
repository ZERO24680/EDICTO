type Params = { params: { slug: string } };

export default function OrgVerificationPage({ params }: Params) {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16 space-y-6">
      <h1 className="font-[var(--font-eb-garamond)] text-3xl">Verification — {params.slug}</h1>
      <p>Domain email, DNS TXT, and documents upload to be implemented.</p>
    </main>
  );
}

