import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get("code");
  const next = searchParams.get("next") ?? "/admin";

  if (code) {
    const supabase = await createClient();
    const { error } = await supabase.auth.exchangeCodeForSession(code);
    if (!error) {
      // Redirect to the admin dashboard after successful auth
      return NextResponse.redirect(`${origin}${next}`);
    }
  }

  // If code exchange fails, redirect back to login with an error
  return NextResponse.redirect(`${origin}/admin/login?error=auth_callback_failed`);
}
