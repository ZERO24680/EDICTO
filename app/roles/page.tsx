import Link from "next/link";

export default function RolesPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16 space-y-8">
      <h1 className="font-[var(--font-eb-garamond)] text-4xl">Roles</h1>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="border rounded p-6 bg-white/70">
          <h2 className="text-xl font-medium mb-2">Organizations</h2>
          <ul className="text-sm space-y-1">
            <li>• Publish verified statements</li>
            <li>• Public profile and API</li>
            <li>• Free to publish</li>
          </ul>
          <Link href="/onboarding/org" className="mt-4 inline-flex px-4 py-2 rounded bg-[var(--gold)] text-[var(--navy)] font-medium">Create verified profile</Link>
        </div>
        <div className="border rounded p-6 bg-white/70">
          <h2 className="text-xl font-medium mb-2">Journalists & Researchers</h2>
          <ul className="text-sm space-y-1">
            <li>• Follow orgs and set alerts</li>
            <li>• Advanced search, unlimited history (Pro)</li>
            <li>• Exports & integrations</li>
          </ul>
          <Link href="/onboarding/user" className="mt-4 inline-flex px-4 py-2 rounded border">Sign up</Link>
        </div>
      </div>
      <p className="text-sm opacity-70">On pricing, publishing is free for organizations. Paid value is on the Pro user side.</p>
    </main>
  );
}

