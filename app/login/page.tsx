"use client";
import { useState } from "react";
import { signIn } from "next-auth/react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/auth/signin/email", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({ csrfToken: "", email }),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  async function devSignIn() {
    setStatus("sending");
    try {
      await signIn("credentials", { email, callbackUrl: "/feed" });
    } catch {
      setStatus("error");
    }
  }

  return (
    <main className="max-w-sm mx-auto px-6 py-16 space-y-6">
      <h1 className="font-[var(--font-eb-garamond)] text-3xl">Sign in</h1>
      <form onSubmit={submit} className="space-y-3">
        <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="your@email.com" className="w-full border rounded px-3 py-2 bg-white text-black" />
        <button disabled={status === "sending"} className="px-4 py-2 rounded bg-[var(--gold)] text-[var(--navy)] font-medium">Send magic link</button>
        {status === "sent" && <p className="text-sm text-green-700">Check the server console for the link (dev mode).</p>}
        {status === "error" && <p className="text-sm text-red-700">Something went wrong.</p>}
      </form>
      <div className="pt-4 border-t">
        <button onClick={devSignIn} className="mt-3 px-4 py-2 rounded border">Developer sign in (no email)</button>
        <p className="text-xs opacity-70 mt-1">Requires DEV_AUTH=1 in .env</p>
      </div>
    </main>
  );
}

