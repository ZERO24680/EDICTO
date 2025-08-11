export default function CookiesPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16 space-y-6">
      <h1 className="font-[var(--font-eb-garamond)] text-4xl">Cookie Policy</h1>
      <p>Effective date: 2025-01-01</p>

      <section className="space-y-2">
        <h2 className="font-[var(--font-eb-garamond)] text-2xl">1. What are cookies?</h2>
        <p>Cookies are small text files stored on your device to help websites function and improve the user experience.</p>
      </section>

      <section className="space-y-2">
        <h2 className="font-[var(--font-eb-garamond)] text-2xl">2. Types of cookies we use</h2>
        <ul className="list-disc ml-5 space-y-1">
          <li>Essential cookies (required for sign-in and core functionality)</li>
          <li>Analytics cookies (usage and performance)</li>
          <li>Preference cookies (language, display)</li>
        </ul>
      </section>

      <section className="space-y-2">
        <h2 className="font-[var(--font-eb-garamond)] text-2xl">3. Managing cookies</h2>
        <p>You can manage or disable cookies in your browser settings. Disabling essential cookies may break functionality.</p>
      </section>

      <section className="space-y-2">
        <h2 className="font-[var(--font-eb-garamond)] text-2xl">4. Contact</h2>
        <p>privacy@edicto.com</p>
      </section>
    </main>
  );
}

