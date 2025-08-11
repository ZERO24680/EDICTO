"use client";
import { useState } from "react";
import Link from "next/link";

export default function PricingPage() {
  const [annual, setAnnual] = useState(false);
  const proPrice = annual ? 144 : 15; // €/an or €/mois
  const teamPrice = annual ? 470 : 49;

  return (
    <main className="max-w-6xl mx-auto px-6 py-16 space-y-14">
      {/* Hero */}
      <section className="text-center space-y-4">
        <h1 className="font-[var(--font-eb-garamond)] text-4xl md:text-5xl">Choose the plan that fits your needs</h1>
        <p className="text-lg opacity-80 max-w-3xl mx-auto">
          Read recent statements for free, or unlock EDICTO’s full power with advanced search, unlimited history, and smart alerts.
        </p>
        <div className="inline-flex items-center gap-3 mt-2 text-sm">
          <span className={!annual ? "font-medium" : "opacity-70"}>Monthly</span>
          <button
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${annual ? "bg-[var(--gold)]" : "bg-black/20"}`}
            onClick={() => setAnnual((v) => !v)}
            aria-label="Toggle annual pricing"
          >
            <span
              className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform ${annual ? "translate-x-5" : "translate-x-1"}`}
            />
          </button>
          <span className={annual ? "font-medium" : "opacity-70"}>Annual (-20%)</span>
        </div>
      </section>

      {/* Plans */}
      <section className="grid md:grid-cols-3 gap-6 items-stretch">
        {/* Free */}
        <div className="border rounded-lg p-6 bg-white/70 flex flex-col">
          <div className="mb-2 text-sm opacity-70">EDICTO Free</div>
          <h3 className="text-2xl font-semibold mb-1">€0<span className="text-base font-normal opacity-70"> /mo</span></h3>
          <p className="opacity-80 mb-4">Read recent statements and follow a few organizations.</p>
          <ul className="space-y-2 text-sm flex-1">
            <li>• Unlimited access to last 30 days</li>
            <li>• Simple search (keyword + organization)</li>
            <li>• Follow up to 5 organizations</li>
            <li>• Simple alerts (new statements)</li>
            <li>• Public topics</li>
            <li>• RSS per organization</li>
          </ul>
          <Link href="/onboarding/user" className="mt-5 inline-flex justify-center px-4 py-2 rounded border">Get started</Link>
        </div>

        {/* Pro */}
        <div className="border-2 border-[var(--gold)] rounded-lg p-6 bg-white flex flex-col shadow-sm">
          <div className="mb-2 text-sm text-[var(--navy)]">EDICTO Pro</div>
          <h3 className="text-2xl font-semibold mb-1">
            {annual ? `€${proPrice}` : `€${proPrice}`}<span className="text-base font-normal opacity-70"> {annual ? "/yr" : "/mo"}</span>
          </h3>
          {annual && <div className="text-xs opacity-70">equiv. 12×€15 −20%</div>}
          <p className="opacity-80 mb-4">For journalists, researchers, and analysts.</p>
          <ul className="space-y-2 text-sm flex-1">
            <li>• Unlimited history</li>
            <li>• Advanced search (full-text + filters)</li>
            <li>• Conditional alerts (keywords, expressions)</li>
            <li>• Exports (PDF, CSV, ZIP with attachments)</li>
            <li>• Integrations (Slack, Notion, Airtable)</li>
            <li>• Personal API</li>
            <li>• Unlimited following</li>
            <li>• AI summaries</li>
          </ul>
          <Link href="/billing" className="mt-5 inline-flex justify-center px-4 py-2 rounded bg-[var(--gold)] text-[var(--navy)] font-medium">Upgrade to Pro</Link>
        </div>

        {/* Team */}
        <div className="rounded-lg p-6 flex flex-col" style={{ backgroundColor: "var(--navy)", color: "var(--ivory)" }}>
          <div className="mb-2 text-sm">EDICTO Team</div>
          <h3 className="text-2xl font-semibold mb-1">
            {annual ? `€${teamPrice}` : `€${teamPrice}`}<span className="text-base font-normal opacity-80"> {annual ? "/yr" : "/mo"}</span>
          </h3>
          {annual && <div className="text-xs opacity-80">equiv. 12×€49 −20%</div>}
          <p className="opacity-90 mb-4">For newsrooms, agencies, and monitoring teams.</p>
          <ul className="space-y-2 text-sm flex-1">
            <li>• Everything in Pro</li>
            <li>• Multiple seats (up to 5 users)</li>
            <li>• SSO (Google Workspace, Microsoft Entra)</li>
            <li>• Extended API (higher quotas, extra endpoints)</li>
            <li>• Webhooks</li>
            <li>• Priority support</li>
          </ul>
          <Link href="/contact" className="mt-5 inline-flex justify-center px-4 py-2 rounded border border-white/30">Contact the team</Link>
        </div>
      </section>

      {/* Comparison table */}
      <section className="overflow-x-auto">
        <h2 className="font-[var(--font-eb-garamond)] text-2xl mb-4">Feature comparison</h2>
        <table className="min-w-full text-sm border rounded overflow-hidden">
          <thead className="bg-black/5">
            <tr>
              <th className="text-left p-3">Feature</th>
              <th className="text-center p-3">Free</th>
              <th className="text-center p-3">Pro</th>
              <th className="text-center p-3">Team</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Unlimited history", false, true, true],
              ["Advanced search", false, true, true],
              ["Conditional alerts", false, true, true],
              ["Export PDF/CSV/ZIP", false, true, true],
              ["Integrations (Slack/Notion)", false, true, true],
              ["Personal API", false, true, true],
              ["Multiple seats", false, false, true],
              ["Priority support", false, false, true],
            ].map(([label, free, pro, team], i) => (
              <tr key={i} className="border-t">
                <td className="p-3">{label as string}</td>
                <td className="text-center">{free ? "✅" : "—"}</td>
                <td className="text-center">{pro ? "✅" : "—"}</td>
                <td className="text-center">{team ? "✅" : "—"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* FAQ */}
      <section className="grid md:grid-cols-2 gap-6">
        <div>
          <h3 className="font-medium mb-2">Can I switch plans anytime?</h3>
          <p className="opacity-80">Yes, instantly via your billing portal.</p>
        </div>
        <div>
          <h3 className="font-medium mb-2">Can I cancel?</h3>
          <p className="opacity-80">Yes. No lock-in. Access remains until the end of the period.</p>
        </div>
        <div>
          <h3 className="font-medium mb-2">Do organizations pay to publish?</h3>
          <p className="opacity-80">No. Publishing on EDICTO is free.</p>
        </div>
        <div>
          <h3 className="font-medium mb-2">Student/Research discounts?</h3>
          <p className="opacity-80">Yes, on request (−50%). Contact us.</p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="text-center space-y-3 border rounded p-8 bg-white/60">
        <h2 className="font-[var(--font-eb-garamond)] text-2xl">Ready to access official information without limits?</h2>
        <div className="flex items-center justify-center gap-3">
          <Link href="/billing" className="px-4 py-2 rounded bg-[var(--gold)] text-[var(--navy)] font-medium">Upgrade to Pro</Link>
          <Link href="#" className="px-4 py-2 rounded border">Get started</Link>
        </div>
      </section>
    </main>
  );
}

