export default function AboutPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16 space-y-10">
      {/* Hero */}
      <section className="text-center space-y-2">
        <h1 className="font-[var(--font-eb-garamond)] text-4xl">About EDICTO</h1>
        <p className="opacity-80">The official register of verified statements.</p>
      </section>

      {/* Introduction */}
      <section className="space-y-3">
        <p>
          EDICTO is a public platform dedicated to centralizing and archiving official statements published by verified organizations — companies, institutions,
          NGOs, and other public or private entities. Our mission is to ensure everyone — citizens, journalists, researchers, and institutions — has free, reliable,
          and immediate access to official information.
        </p>
      </section>

      {/* Origine du projet */}
      <section className="space-y-3">
        <h2 className="font-[var(--font-eb-garamond)] text-2xl">Project origin</h2>
        <p>
          EDICTO was born from a simple observation: many official announcements are posted on social networks as images or screenshots, hard to read and search.
          Meanwhile, each organization communicates on its own channels, scattered and sometimes hard to access. EDICTO provides a single, open register where
          each statement is authenticated, timestamped, and archived.
        </p>
      </section>

      {/* Engagements */}
      <section className="space-y-3">
        <h2 className="font-[var(--font-eb-garamond)] text-2xl">Our commitments</h2>
        <ul className="list-disc ml-5 space-y-1">
          <li><strong>Authenticity</strong>: rigorous verification before publishing.</li>
          <li><strong>Accessibility</strong>: free browsing, optimized search, clear interface.</li>
          <li><strong>Traceability</strong>: timestamps, immutable archiving, version history.</li>
          <li><strong>Neutrality</strong>: no editorial treatment, only official publications.</li>
          <li><strong>Transparency</strong>: clarity about our methods and sources.</li>
        </ul>
      </section>

      {/* Publics */}
      <section className="space-y-3">
        <h2 className="font-[var(--font-eb-garamond)] text-2xl">Who it’s for</h2>
        <p>
          EDICTO serves anyone needing quick access to reliable official information: the public, journalists and researchers for monitoring and analysis, and
          institutions and companies to distribute and archive their own statements.
        </p>
      </section>

      {/* Gouvernance */}
      <section className="space-y-3">
        <h2 className="font-[var(--font-eb-garamond)] text-2xl">Governance</h2>
        <p>
          EDICTO is a subsidiary of AC Global Group, specialized in innovative digital solutions.
        </p>
      </section>

      {/* Contact */}
      <section className="space-y-2">
        <h2 className="font-[var(--font-eb-garamond)] text-2xl">Contact</h2>
        <p>General: <a className="underline" href="mailto:contact@edicto.com">contact@edicto.com</a></p>
        <p>Press: <a className="underline" href="mailto:press@edicto.com">press@edicto.com</a></p>
        <p>Contact page: <a className="underline" href="/contact">/contact</a></p>
      </section>
    </main>
  );
}

