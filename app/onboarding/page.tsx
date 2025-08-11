import Link from "next/link";

export default function OnboardingIndex() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16 space-y-8">
      <header className="text-center space-y-2">
        <h1 className="font-[var(--font-eb-garamond)] text-4xl">Get started</h1>
        <p className="opacity-80">Pick the profile that matches you.</p>
      </header>
      <div className="grid md:grid-cols-2 gap-6">
        <Link href="/onboarding/org" className="border rounded p-6 bg-white/70 hover:bg-white">
          <div className="text-sm opacity-70 mb-1">Organizations</div>
          <h2 className="text-xl font-medium mb-2">Create verified profile</h2>
          <p className="opacity-80 mb-3 text-sm">Publish official statements from a verified company, institution, or NGO. Your profile is public and tamper-proof.</p>
          <ul className="text-sm space-y-1">
            <li>• Domain email verification</li>
            <li>• DNS TXT step</li>
            <li>• Optional legal document</li>
          </ul>
          <div className="mt-4 inline-flex px-4 py-2 rounded bg-[var(--gold)] text-[var(--navy)] font-medium">Continue</div>
        </Link>
        <Link href="/onboarding/user" className="border rounded p-6 bg-white/70 hover:bg-white">
          <div className="text-sm opacity-70 mb-1">Journalists & Researchers</div>
          <h2 className="text-xl font-medium mb-2">Sign up</h2>
          <p className="opacity-80 mb-3 text-sm">Follow organizations, search across statements, set alerts, and export data (Pro). Reading is free; upgrade anytime.</p>
          <ul className="text-sm space-y-1">
            <li>• Reader account (email + magic link)</li>
            <li>• Choose Free or Pro plan</li>
            <li>• Pick topics and orgs to follow</li>
          </ul>
          <div className="mt-4 inline-flex px-4 py-2 rounded border">Continue</div>
        </Link>
      </div>
      <div className="text-center text-sm opacity-80">
        Not sure? <Link href="/roles" className="underline">Compare roles</Link>
      </div>
    </main>
  );
}

