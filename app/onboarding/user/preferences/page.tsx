export default function UserPreferences() {
  const suggestedTopics = [
    { name: "Energy", slug: "energie" },
    { name: "Finance", slug: "finance" },
    { name: "Health", slug: "sante" },
    { name: "Tech", slug: "tech" },
  ];
  const suggestedOrgs = [
    { name: "EDF", slug: "edf" },
    { name: "CNIL", slug: "cnil" },
  ];

  return (
    <main className="max-w-4xl mx-auto px-6 py-16 space-y-6">
      <h1 className="font-[var(--font-eb-garamond)] text-3xl">Set your preferences</h1>
      <p className="opacity-80">Pick topics and organizations to follow. You can change this later.</p>
      <div className="grid md:grid-cols-2 gap-6">
        <section className="border rounded p-4 bg-white/70">
          <h2 className="font-medium mb-2">Topics</h2>
          <div className="grid grid-cols-2 gap-2 text-sm">
            {suggestedTopics.map((t) => (
              <label key={t.slug} className="border rounded px-3 py-2">
                <input type="checkbox" className="mr-2" /> {t.name}
              </label>
            ))}
          </div>
        </section>
        <section className="border rounded p-4 bg-white/70">
          <h2 className="font-medium mb-2">Organizations</h2>
          <div className="grid grid-cols-2 gap-2 text-sm">
            {suggestedOrgs.map((o) => (
              <label key={o.slug} className="border rounded px-3 py-2">
                <input type="checkbox" className="mr-2" /> {o.name}
              </label>
            ))}
          </div>
        </section>
      </div>
      <div>
        <a href="/feed" className="px-4 py-2 rounded bg-[var(--gold)] text-[var(--navy)] font-medium">Continue to my feed</a>
      </div>
    </main>
  );
}

