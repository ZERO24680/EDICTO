"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const isAuthenticated = false; // TODO: wire with NextAuth

  return (
    <header className="sticky top-0 z-40 bg-[var(--ivory)]/90 backdrop-blur border-b border-black/10">
      <div className="max-w-6xl mx-auto px-4 h-14 flex items-center gap-3">
        {/* Branding */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <Image src="/edicto-mark.svg" alt="EDICTO" width={24} height={24} />
          <Image src="/edicto-wordmark.svg" alt="EDICTO" width={100} height={18} className="hidden sm:block" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-4 text-sm">
          <Link href="/statements" className="hover:underline">Explore</Link>
          <Link href="/topics" className="hover:underline">Topics</Link>
          <Link href="/pricing" className="hover:underline">Pricing</Link>
          <Link href="/about" className="hover:underline">About</Link>
        </nav>

        {/* Desktop search */}
        <form action="/search" className="ml-auto hidden md:flex items-center bg-white rounded border overflow-hidden">
          <input
            name="q"
            placeholder="Search by keyword, organization, or topic…"
            className="px-3 py-2 text-sm text-black outline-none min-w-[260px]"
          />
          <button className="px-3 py-2 text-sm bg-[var(--gold)] text-[var(--navy)]">Search</button>
        </form>

        {/* Desktop actions */}
        <div className="ml-2 hidden md:flex items-center gap-2 text-sm">
          {isAuthenticated ? (
            <>
              <Link href="/feed" className="px-3 py-1.5 border rounded">My feed</Link>
              <Link href="/onboarding" className="px-3 py-1.5 rounded bg-[var(--gold)] text-[var(--navy)] font-medium">Get started</Link>
            </>
          ) : (
            <>
              <Link href="/login" className="px-3 py-1.5 border rounded">Login</Link>
              <Link href="/onboarding" className="px-3 py-1.5 rounded bg-[var(--gold)] text-[var(--navy)] font-medium">Get started</Link>
            </>
          )}
        </div>

        {/* Mobile actions */}
        <div className="ml-auto md:hidden flex items-center gap-1">
          <button aria-label="Search" className="p-2 rounded hover:bg-black/5" onClick={() => setSearchOpen(true)}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M21 20l-5.2-5.2M10 17a7 7 0 1 1 7-7 7 7 0 0 1-7 7Z" stroke="#0B1B2B" strokeWidth="2"/></svg>
          </button>
          <Link href="/onboarding" className="px-3 py-1.5 rounded bg-[var(--gold)] text-[var(--navy)] font-medium">Start</Link>
          <button aria-label="Menu" className="p-2 rounded hover:bg-black/5" onClick={() => setMobileOpen((v) => !v)}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M3 6h18M3 12h18M3 18h18" stroke="#0B1B2B" strokeWidth="2"/></svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-black/10 bg-[var(--ivory)]">
          <div className="px-4 py-3 space-y-3">
            <form action="/search" className="flex items-center bg-white rounded border overflow-hidden">
              <input name="q" placeholder="Search by keyword, organization, or topic…" className="px-3 py-2 text-sm text-black outline-none flex-1" />
              <button className="px-3 py-2 text-sm bg-[var(--gold)] text-[var(--navy)]">Search</button>
            </form>
            <nav className="grid text-sm">
              <Link href="/statements" className="px-2 py-2 rounded hover:bg-black/5" onClick={() => setMobileOpen(false)}>Explore</Link>
              <Link href="/topics" className="px-2 py-2 rounded hover:bg-black/5" onClick={() => setMobileOpen(false)}>Topics</Link>
              <Link href="/pricing" className="px-2 py-2 rounded hover:bg-black/5" onClick={() => setMobileOpen(false)}>Pricing</Link>
              <Link href="/about" className="px-2 py-2 rounded hover:bg-black/5" onClick={() => setMobileOpen(false)}>About</Link>
            </nav>
            <div className="flex gap-2">
              {isAuthenticated ? (
                <Link href="/feed" className="px-3 py-1.5 border rounded" onClick={() => setMobileOpen(false)}>My feed</Link>
              ) : (
                <Link href="/login" className="px-3 py-1.5 border rounded" onClick={() => setMobileOpen(false)}>Login</Link>
              )}
              <Link href="/onboarding" className="px-3 py-1.5 rounded bg-[var(--gold)] text-[var(--navy)] font-medium" onClick={() => setMobileOpen(false)}>Get started</Link>
            </div>
          </div>
        </div>
      )}

      {/* Search modal */}
      {searchOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-start md:items-center justify-center p-4" onClick={() => setSearchOpen(false)}>
          <div className="w-full max-w-2xl bg-[var(--ivory)] rounded shadow" onClick={(e) => e.stopPropagation()}>
            <div className="p-3 border-b flex items-center justify-between">
              <div className="font-medium">Search</div>
              <button aria-label="Close" className="p-2" onClick={() => setSearchOpen(false)}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M6 6l12 12M18 6L6 18" stroke="#0B1B2B" strokeWidth="2"/></svg>
              </button>
            </div>
            <form action="/search" className="p-4 flex gap-2">
              <input name="q" autoFocus placeholder="Search by keyword, organization, or topic…" className="flex-1 px-3 py-3 text-black outline-none bg-white border rounded" />
              <button className="px-4 py-3 bg-[var(--gold)] text-[var(--navy)] rounded font-medium" onClick={() => setSearchOpen(false)}>Search</button>
            </form>
          </div>
        </div>
      )}
    </header>
  );
}

