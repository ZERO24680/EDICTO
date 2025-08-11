export default function TermsPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16 space-y-6">
      <h1 className="font-[var(--font-eb-garamond)] text-4xl">EDICTO – Terms of Use</h1>
      <p>Effective date: [Insert date]</p>
      <p>Last updated: [Insert date]</p>

      <section>
        <h2 className="font-[var(--font-eb-garamond)] text-2xl">1. Introduction</h2>
        <p>Welcome to EDICTO, operated by EDICTO, a subsidiary of AC Global Group.</p>
        <p>By accessing or using our platform, you agree to comply with and be bound by these Terms of Use. If you do not agree, you must not use EDICTO.</p>
      </section>

      <section>
        <h2 className="font-[var(--font-eb-garamond)] text-2xl">2. Definitions</h2>
        <p>
          "Platform": the EDICTO website, services, and APIs. "User": any individual or entity using the Platform. "Organization": a verified entity (company,
          institution, NGO) that publishes official statements on EDICTO. "Statement": an official communication published by a verified Organization. "We",
          "Us", "Our": EDICTO.
        </p>
      </section>

      <section>
        <h2 className="font-[var(--font-eb-garamond)] text-2xl">3. Eligibility</h2>
        <ul className="list-disc ml-5 space-y-1">
          <li>You must be at least 18 years old.</li>
          <li>If registering on behalf of an Organization, you must have authority to do so.</li>
          <li>You must provide accurate, complete, and up-to-date information.</li>
        </ul>
      </section>

      <section>
        <h2 className="font-[var(--font-eb-garamond)] text-2xl">4. Account Types</h2>
        <p>Organization Accounts: for verified entities that publish Statements. User Accounts: for individuals (journalists, researchers, general public).</p>
        <p>You are responsible for safeguarding your login credentials and for all activity under your account.</p>
      </section>

      <section>
        <h2 className="font-[var(--font-eb-garamond)] text-2xl">5. Verified Organizations</h2>
        <p>To create a verified Organization profile you must complete our verification process (domain email, DNS records, legal documents) and ensure all published Statements are accurate and official. We may suspend or revoke verification if misuse is detected.</p>
      </section>

      <section>
        <h2 className="font-[var(--font-eb-garamond)] text-2xl">6. Publishing Statements</h2>
        <ul className="list-disc ml-5 space-y-1">
          <li>You confirm each Statement is an official, authorized communication from your Organization.</li>
          <li>You grant EDICTO a non-exclusive, worldwide, royalty-free license to store, display, and archive the Statement.</li>
          <li>Statements must not contain unlawful, defamatory, or misleading content.</li>
        </ul>
      </section>

      <section>
        <h2 className="font-[var(--font-eb-garamond)] text-2xl">7. Prohibited Conduct</h2>
        <ul className="list-disc ml-5 space-y-1">
          <li>Use the Platform for illegal purposes.</li>
          <li>Impersonate another person or Organization.</li>
          <li>Publish false or misleading Statements.</li>
          <li>Attempt to breach the security or integrity of the Platform.</li>
          <li>Use automated systems to scrape or overload the service without permission.</li>
        </ul>
      </section>

      <section>
        <h2 className="font-[var(--font-eb-garamond)] text-2xl">8. Intellectual Property</h2>
        <p>The EDICTO platform, brand, and design are protected by intellectual property laws. Statements remain the property of their respective owners but are licensed to EDICTO for display and archiving.</p>
      </section>

      <section>
        <h2 className="font-[var(--font-eb-garamond)] text-2xl">9. Paid Plans and Billing</h2>
        <ul className="list-disc ml-5 space-y-1">
          <li>Some features are available only through a paid subscription.</li>
          <li>Prices and features are listed on our Pricing page. Payments are processed via third-party providers (e.g., Stripe).</li>
          <li>Subscriptions renew automatically unless canceled before the next billing cycle.</li>
        </ul>
      </section>

      <section>
        <h2 className="font-[var(--font-eb-garamond)] text-2xl">10. Disclaimers</h2>
        <p>EDICTO does not edit or alter Statements from verified Organizations but cannot guarantee their absolute accuracy. The Platform is provided “as is” and we disclaim all warranties to the maximum extent permitted by law.</p>
      </section>

      <section>
        <h2 className="font-[var(--font-eb-garamond)] text-2xl">11. Limitation of Liability</h2>
        <p>To the fullest extent permitted by law, EDICTO shall not be liable for any indirect, incidental, or consequential damages arising from your use of the Platform. Our total liability shall not exceed the amount you have paid to us in the past 12 months.</p>
      </section>

      <section>
        <h2 className="font-[var(--font-eb-garamond)] text-2xl">12. Termination</h2>
        <p>We may suspend or terminate your account if you violate these Terms, if we suspect fraudulent or harmful activity, or at our discretion with reasonable notice where possible.</p>
      </section>

      <section>
        <h2 className="font-[var(--font-eb-garamond)] text-2xl">13. Changes to These Terms</h2>
        <p>We may update these Terms from time to time. Changes will be posted on this page with a new “Last updated” date. Continued use of the Platform after changes constitutes acceptance.</p>
      </section>

      <section>
        <h2 className="font-[var(--font-eb-garamond)] text-2xl">14. Governing Law</h2>
        <p>These Terms shall be governed by and construed in accordance with the laws of [Insert Jurisdiction], without regard to conflict of law principles.</p>
      </section>

      <section>
        <h2 className="font-[var(--font-eb-garamond)] text-2xl">15. Contact Us</h2>
        <p>Email: legal@edicto.com (placeholder)</p>
        <p>Postal address: [Insert legal address]</p>
      </section>
    </main>
  );
}

