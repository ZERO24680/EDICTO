import Link from "next/link";

export default function OnboardingOrg() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16 space-y-6">
      <h1 className="font-[var(--font-eb-garamond)] text-3xl">Create a verified profile — Organizations</h1>
      <p className="opacity-80">We’ll verify your domain and set up your public profile.</p>
      <ol className="list-decimal ml-5 space-y-1 text-sm">
        <li>Domain email verification</li>
        <li>DNS TXT step</li>
        <li>Optional legal document upload</li>
      </ol>
      <div className="flex gap-3">
        <Link href="/org/create" className="px-4 py-2 rounded bg-[var(--gold)] text-[var(--navy)] font-medium">Start verification</Link>
        <Link href="/roles" className="px-4 py-2 rounded border">Not sure? Compare roles</Link>
      </div>
    </main>
  );
}

