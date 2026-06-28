import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";


const ALL_PAGES = [
  "home", "about", "services", "robotics", "biomedic",
  "software", "portfolio", "contact", "privacy", "terms", "nav", "footer",
] as const;

export async function GET() {
  try {
    const { data, error } = await supabase
      .from("translations")
      .select("page, data");

    if (error) {
      console.error("Supabase GET error:", error);
      return NextResponse.json({}, { status: 200 }); // return empty — defaults will be used
    }

    // Merge rows into { page: data } object
    const overrides: Record<string, any> = {};
    for (const row of data ?? []) {
      overrides[row.page] = row.data;
    }

    return NextResponse.json(overrides);
  } catch (err: any) {
    console.error("GET translations error:", err);
    return NextResponse.json({}, { status: 200 });
  }
}

export async function POST(request: Request) {
  try {
    // 1. Authenticate: Only Supabase JWT bearer tokens are accepted
    const authHeader = request.headers.get("Authorization");

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });
    }

    const token = authHeader.split(" ")[1];
    const { data: { user }, error: authError } = await supabase.auth.getUser(token);

    if (authError || !user) {
      return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    if (!body || typeof body !== "object") {
      return NextResponse.json({ success: false, error: "Invalid data" }, { status: 400 });
    }

    // Upsert each page's translations as a separate row
    const rows = ALL_PAGES
      .filter((page) => body[page] !== undefined)
      .map((page) => ({ page, data: body[page] ?? {} }));

    if (rows.length === 0) {
      // Reset: delete all rows
      const { error } = await supabase.from("translations").delete().neq("page", "");
      if (error) {
        console.error("Supabase DELETE error:", error);
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
      }
      return NextResponse.json({ success: true });
    }

    const { error } = await supabase
      .from("translations")
      .upsert(rows, { onConflict: "page" });

    if (error) {
      console.error("Supabase UPSERT error:", error);
      return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err: any) {
    console.error("POST translations error:", err);
    return NextResponse.json({ success: false, error: err.message ?? "Unknown error" }, { status: 500 });
  }
}
