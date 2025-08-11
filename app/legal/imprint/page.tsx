export default function ImprintPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16 space-y-6">
      <h1 className="font-[var(--font-eb-garamond)] text-4xl">Imprint</h1>
      <section>
        <h2 className="font-[var(--font-eb-garamond)] text-2xl">Publisher</h2>
        <p>EDICTO — AC Global Group</p>
        <p>[Headquarters address], France</p>
        <p>Contact: legal@edicto.com</p>
      </section>
      <section>
        <h2 className="font-[var(--font-eb-garamond)] text-2xl">Hosting</h2>
        <p>Application hosting: Vercel (EU/US)</p>
        <p>Database: Neon (EU)</p>
      </section>
      <section>
        <h2 className="font-[var(--font-eb-garamond)] text-2xl">Director of publication</h2>
        <p>[Name], [Title]</p>
      </section>
    </main>
  );
}

