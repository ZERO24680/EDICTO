"use client";
import { useState } from "react";

export default function CreateOrgPage() {
  const [name, setName] = useState("");
  const [website, setWebsite] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setResult(null);
    try {
      const res = await fetch("/api/org/verification/request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, website, contactEmail: email }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed");
      setResult("Request submitted. Check instructions below.");
    } catch (err: any) {
      setResult(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="max-w-xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-[var(--font-eb-garamond)]">Create a verified profile</h1>
      <p>Provide your organization details to start domain verification.</p>
      <form onSubmit={submit} className="space-y-4">
        <div>
          <label className="block text-sm mb-1">Organization name</label>
          <input value={name} onChange={(e) => setName(e.target.value)} required className="w-full border rounded px-3 py-2 bg-white text-black" />
        </div>
        <div>
          <label className="block text-sm mb-1">Official website</label>
          <input type="url" value={website} onChange={(e) => setWebsite(e.target.value)} required className="w-full border rounded px-3 py-2 bg-white text-black" />
        </div>
        <div>
          <label className="block text-sm mb-1">Contact email (domain)</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full border rounded px-3 py-2 bg-white text-black" />
        </div>
        <button disabled={loading} className="px-4 py-2 rounded bg-[var(--gold)] text-[var(--navy)] font-medium">
          {loading ? "Submitting..." : "Submit request"}
        </button>
      </form>
      {result && <p>{result}</p>}
      <div className="mt-6 p-4 border rounded">
        <h2 className="font-medium mb-2">What happens next?</h2>
        <ol className="list-decimal ml-5 space-y-1">
          <li>We generate a DNS TXT token for your domain.</li>
          <li>You add it to your DNS zone and validate via email.</li>
          <li>Admin performs a quick review and grants the verified badge.</li>
        </ol>
      </div>
    </main>
  );
}

