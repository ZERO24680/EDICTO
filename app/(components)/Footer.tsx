import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-black/10">
      {/* Upper: secondary navigation */}
      <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-8 text-sm">
        <div>
          <div className="font-medium mb-3">Product</div>
          <nav className="grid gap-2">
            <Link href="/statements" className="hover:underline">Explore statements</Link>
            <Link href="/topics" className="hover:underline">Topics</Link>
            <Link href="/pricing" className="hover:underline">Pricing</Link>
            <Link href="/onboarding" className="hover:underline">Create verified profile</Link>
          </nav>
        </div>
        <div>
          <div className="font-medium mb-3">Resources</div>
          <nav className="grid gap-2">
            <Link href="/help" className="hover:underline">Help center</Link>
            <Link href="/api-docs" className="hover:underline">API docs</Link>
            <Link href="/rss" className="hover:underline">RSS feeds</Link>
            <Link href="/brand" className="hover:underline">Brand assets</Link>
          </nav>
        </div>
        <div>
          <div className="font-medium mb-3">Legal</div>
          <nav className="grid gap-2">
            <Link href="/legal/privacy" className="hover:underline">Privacy policy</Link>
            <Link href="/legal/terms" className="hover:underline">Terms of service</Link>
            <Link href="/legal/cookies" className="hover:underline">Cookie policy</Link>
            <Link href="/legal/imprint" className="hover:underline">Imprint</Link>
          </nav>
        </div>
      </div>

      {/* Middle: branding & mission */}
      <div className="border-t border-black/10">
        <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-[auto_1fr] gap-6 items-center">
          <div className="flex items-center gap-2">
            <Image src="/edicto-mark.svg" alt="EDICTO" width={28} height={28} />
            <Image src="/edicto-wordmark.svg" alt="EDICTO" width={120} height={20} />
          </div>
          <div>
            <div className="font-medium">The official register of verified statements.</div>
            <p className="opacity-80 mt-2">
              EDICTO centralise et archive les déclarations officielles des organisations vérifiées,
              pour un accès libre, fiable et transparent à l’information.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom: practical info */}
      <div className="border-t border-black/10">
        <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col md:flex-row gap-4 md:items-center md:justify-between text-sm">
          <div className="space-x-4">
            <a href="mailto:press@edicto.com" className="hover:underline">press@edicto.com</a>
            <a href="mailto:support@edicto.com" className="hover:underline">support@edicto.com</a>
          </div>
          <div className="flex items-center gap-3">
            <a href="https://www.linkedin.com" aria-label="LinkedIn" className="p-1 rounded hover:bg-black/5">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M6 6h4v12H6V6Zm2-5a2 2 0 1 1 0 4 2 2 0 0 1 0-4Zm5 9c1.66 0 3 1.34 3 3v5h-4v-5a1 1 0 0 0-2 0v5h-4V6h4v1.5A4 4 0 0 1 13 10Z" fill="#0B1B2B"/></svg>
            </a>
            <a href="https://x.com" aria-label="X" className="p-1 rounded hover:bg-black/5">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M4 4h3l5 7 6-7h2l-7 8 7 8h-3l-5-7-6 7H4l7-8-7-8Z" fill="#0B1B2B"/></svg>
            </a>
            <Link href="/rss" aria-label="RSS" className="p-1 rounded hover:bg-black/5">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M6 18a2 2 0 1 1 0-4 2 2 0 0 1 0 4Zm-2-8a10 10 0 0 1 10 10h-3a7 7 0 0 0-7-7V10Zm0-4a14 14 0 0 1 14 14h-3A11 11 0 0 0 4 10V6Z" fill="#0B1B2B"/></svg>
            </Link>
          </div>
          <div className="opacity-70">© {new Date().getFullYear()} EDICTO. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}

