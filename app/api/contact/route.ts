import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { fullName, email, subject, message, consent } = (await req.json()) as any;
  if (!fullName || !email || !message || !consent) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }
  // In MVP: just acknowledge; later: send via Resend or store ticket
  return NextResponse.json({ ok: true });
}

