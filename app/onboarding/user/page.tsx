"use client";
import { useState } from "react";
import { signIn } from "next-auth/react";

export default function OnboardingUser() {
  const [email, setEmail] = useState("");
  const [plan, setPlan] = useState<"FREE" | "PRO">("FREE");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      // Optionally store chosen plan in localStorage to apply after sign-in
      localStorage.setItem("onboarding_plan", plan);
      await signIn("email", { email, callbackUrl: "/onboarding/user/preferences" });
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <main className="max-w-xl mx-auto px-6 py-16 space-y-8">
      <div>
        <h1 className="font-[var(--font-eb-garamond)] text-3xl">Sign up — Journalists & Researchers</h1>
        <p className="opacity-80">Create a reader account with email + magic link. Choose Free or Pro.</p>
      </div>
      <form onSubmit={submit} className="space-y-4 border rounded p-6 bg-white/70">
        <div>
          <label className="block text-sm mb-1">Email</label>
          <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className="w-full border rounded px-3 py-2 bg-white text-black" />
        </div>
        <div>
          <div className="text-sm mb-1">Plan</div>
          <label className="mr-4 text-sm"><input type="radio" name="plan" checked={plan === "FREE"} onChange={() => setPlan("FREE")} /> Free</label>
          <label className="text-sm"><input type="radio" name="plan" checked={plan === "PRO"} onChange={() => setPlan("PRO")} /> Pro</label>
        </div>
        <button disabled={status === "sending"} className="px-4 py-2 rounded bg-[var(--gold)] text-[var(--navy)] font-medium">Send magic link</button>
        {status === "sent" && <p className="text-sm text-green-700">Check the server console for the link (dev mode).</p>}
        {status === "error" && <p className="text-sm text-red-700">Something went wrong.</p>}
      </form>
    </main>
  );
}

