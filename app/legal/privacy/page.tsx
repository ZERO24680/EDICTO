export default function PrivacyPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16 space-y-6">
      <h1 className="font-[var(--font-eb-garamond)] text-4xl">EDICTO – Privacy Policy</h1>
      <p>Effective date: [Insert date]</p>
      <p>Last updated: [Insert date]</p>

      <section className="space-y-3">
        <h2 className="font-[var(--font-eb-garamond)] text-2xl">1. Introduction</h2>
        <p>Welcome to EDICTO. We are committed to protecting your privacy and ensuring the security of your personal data. This Privacy Policy explains how we collect, use, store, and protect information when you use our platform.</p>
        <p>EDICTO is operated by EDICTO, a subsidiary of AC Global Group.</p>
        <p>By accessing or using EDICTO, you agree to the terms of this Privacy Policy.</p>
      </section>

      <section className="space-y-3">
        <h2 className="font-[var(--font-eb-garamond)] text-2xl">2. Information We Collect</h2>
        <h3 className="font-medium">A. Information you provide directly</h3>
        <ul className="list-disc ml-5 space-y-1">
          <li>Account information: name, email address, password (hashed), organization details (for verified profiles).</li>
          <li>Verification data: domain verification tokens, DNS records, business documents (e.g., certificate of incorporation).</li>
          <li>Communications: messages sent to our support or contact emails.</li>
        </ul>
        <h3 className="font-medium mt-3">B. Information collected automatically</h3>
        <ul className="list-disc ml-5 space-y-1">
          <li>Log data: IP address, browser type, operating system, date and time of access.</li>
          <li>Usage data: pages viewed, search queries, interactions with statements and profiles.</li>
          <li>Cookies and tracking technologies: session cookies, preference cookies, analytics cookies.</li>
        </ul>
        <h3 className="font-medium mt-3">C. Information from third parties</h3>
        <p>Data from domain registries, public records, or verification providers to confirm the identity of organizations.</p>
      </section>

      <section className="space-y-3">
        <h2 className="font-[var(--font-eb-garamond)] text-2xl">3. How We Use Your Information</h2>
        <ul className="list-disc ml-5 space-y-1">
          <li>To operate and maintain the EDICTO platform.</li>
          <li>To verify organizational accounts and ensure authenticity.</li>
          <li>To provide user features such as search, alerts, and saved statements.</li>
          <li>To send transactional emails (verification, alerts, account updates).</li>
          <li>To improve the functionality, security, and performance of the service.</li>
          <li>To comply with legal obligations.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="font-[var(--font-eb-garamond)] text-2xl">4. Legal Basis for Processing (GDPR)</h2>
        <ul className="list-disc ml-5 space-y-1">
          <li>Contract: to provide the services you requested.</li>
          <li>Legitimate interest: to ensure the security, integrity, and improvement of the platform.</li>
          <li>Consent: for optional features such as marketing communications.</li>
          <li>Legal obligation: to comply with applicable laws and regulations.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="font-[var(--font-eb-garamond)] text-2xl">5. How We Share Your Information</h2>
        <p>We do not sell your personal data. We may share your data in the following cases:</p>
        <ul className="list-disc ml-5 space-y-1">
          <li>Service providers: hosting, email delivery, analytics, and payment processors (bound by confidentiality agreements).</li>
          <li>Legal compliance: when required by law, court order, or government request.</li>
          <li>Business transfers: in case of a merger, acquisition, or sale of assets, with notice to users.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="font-[var(--font-eb-garamond)] text-2xl">6. Data Retention</h2>
        <p>We retain personal data for as long as necessary to: provide the service, comply with legal obligations, and resolve disputes. You may request deletion of your data at any time (see Section 9).</p>
      </section>

      <section className="space-y-3">
        <h2 className="font-[var(--font-eb-garamond)] text-2xl">7. Security</h2>
        <p>We implement appropriate technical and organizational measures to protect personal data against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure.</p>
      </section>

      <section className="space-y-3">
        <h2 className="font-[var(--font-eb-garamond)] text-2xl">8. Cookies and Tracking Technologies</h2>
        <p>We use cookies and similar technologies to maintain user sessions, store preferences, and analyze traffic and usage. You can control cookies through your browser settings, but disabling them may affect functionality.</p>
      </section>

      <section className="space-y-3">
        <h2 className="font-[var(--font-eb-garamond)] text-2xl">9. Your Rights (GDPR & applicable laws)</h2>
        <ul className="list-disc ml-5 space-y-1">
          <li>Access your personal data</li>
          <li>Correct inaccurate or incomplete data</li>
          <li>Request deletion of your data</li>
          <li>Restrict or object to processing</li>
          <li>Receive a copy of your data in a portable format</li>
        </ul>
        <p>To exercise these rights, contact us at privacy@edicto.com (placeholder).</p>
      </section>

      <section className="space-y-3">
        <h2 className="font-[var(--font-eb-garamond)] text-2xl">10. International Data Transfers</h2>
        <p>Your information may be transferred to and processed in countries outside your country of residence, where data protection laws may differ. We ensure that adequate safeguards are in place.</p>
      </section>

      <section className="space-y-3">
        <h2 className="font-[var(--font-eb-garamond)] text-2xl">11. Third-Party Services</h2>
        <p>EDICTO may contain links to third-party websites. We are not responsible for the privacy practices of those services.</p>
      </section>

      <section className="space-y-3">
        <h2 className="font-[var(--font-eb-garamond)] text-2xl">12. Changes to This Policy</h2>
        <p>We may update this Privacy Policy from time to time. Changes will be posted on this page with a new “Last updated” date.</p>
      </section>

      <section className="space-y-3">
        <h2 className="font-[var(--font-eb-garamond)] text-2xl">13. Contact Us</h2>
        <p>Email: privacy@edicto.com (placeholder)</p>
        <p>Postal address: [Insert legal address]</p>
      </section>
    </main>
  );
}

