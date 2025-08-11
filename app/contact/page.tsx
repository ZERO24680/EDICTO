"use client";
import { useState } from "react";

export default function ContactPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("Support technique");
  const [message, setMessage] = useState("");
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">("idle");

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!consent) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fullName, email, subject, message, consent }),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("ok");
      setFullName("");
      setEmail("");
      setSubject("Support technique");
      setMessage("");
      setConsent(false);
    } catch {
      setStatus("error");
    }
  }

  return (
    <main className="max-w-3xl mx-auto px-6 py-16 space-y-10">
      {/* Header */}
      <section className="text-center space-y-2">
        <h1 className="font-[var(--font-eb-garamond)] text-4xl">Contact EDICTO</h1>
        <p className="opacity-80">We’re here to help your publishing and usage questions.</p>
      </section>

      {/* Direct contacts */}
      <section className="space-y-2 text-sm">
        <p>General support: <a className="underline" href="mailto:contact@edicto.com">contact@edicto.com</a></p>
        <p>Press & media: <a className="underline" href="mailto:press@edicto.com">press@edicto.com</a></p>
        <p>Organizations (publishing): <a className="underline" href="mailto:verify@edicto.com">verify@edicto.com</a></p>
      </section>

      {/* Form */}
      <section className="border rounded p-6 bg-white/70">
        <form onSubmit={submit} className="space-y-4">
          <div>
            <label className="block text-sm mb-1">Full name</label>
            <input required value={fullName} onChange={(e) => setFullName(e.target.value)} className="w-full border rounded px-3 py-2 bg-white text-black" />
          </div>
          <div>
            <label className="block text-sm mb-1">Email address</label>
            <input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full border rounded px-3 py-2 bg-white text-black" />
          </div>
          <div>
            <label className="block text-sm mb-1">Subject</label>
            <select value={subject} onChange={(e) => setSubject(e.target.value)} className="w-full border rounded px-3 py-2 bg-white text-black">
              <option>Technical support</option>
              <option>Information request</option>
              <option>Team plan inquiry (multi-seat)</option>
              <option>Press</option>
              <option>Organization verification</option>
              <option>Other</option>
            </select>
          </div>
          <div>
            <label className="block text-sm mb-1">Message</label>
            <textarea required value={message} onChange={(e) => setMessage(e.target.value)} rows={5} className="w-full border rounded px-3 py-2 bg-white text-black" />
          </div>
          <label className="flex items-start gap-2 text-sm">
            <input type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} className="mt-1" />
            <span>I agree that my data will be processed to answer my request.</span>
          </label>
          <button disabled={status === "loading" || !consent} className="px-4 py-2 rounded bg-[var(--gold)] text-[var(--navy)] font-medium">
            {status === "loading" ? "Sending…" : "Send"}
          </button>
          {status === "ok" && <p className="text-green-700 text-sm">Thanks, your message has been sent.</p>}
          {status === "error" && <p className="text-red-700 text-sm">Something went wrong. Please try again.</p>}
        </form>
      </section>

      {/* Postal */}
      <section className="text-sm opacity-80">
        <div>EDICTO – AC Global Group</div>
        <div>[Headquarters address]</div>
        <div>France</div>
      </section>

      {/* Practical */}
      <section className="text-sm opacity-80">
        <div>Typical response time: under 48 business hours.</div>
        <div>Priority support for Pro and Team subscribers.</div>
      </section>
    </main>
  );
}

