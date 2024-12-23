// import { supabaseServer } from "@/libs/api/supabase";
import { NextResponse } from "next/server";
import { createBrowserClient } from "@supabase/ssr";
import { Database } from "@/libs/api/database.type";

const supabaseServer = createBrowserClient<Database>(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_ANON_KEY!,
);

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get("category") || "~2022";
  const page = parseInt(searchParams.get("page") || "0", 10);
  const itemsPerPage = 10;

  try {
    const { data: posts, error } = await supabaseServer.rpc(
      "fetch_gallery_posts",
      {
        p_category_name: category,
        p_page: page,
        p_items_per_page: itemsPerPage,
      },
    );

    if (error) {
      console.error("Error fetching gallery posts:", error.message);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    // Return the data as JSON
    return NextResponse.json(posts || []);
  } catch (err) {
    console.error("Unexpected error fetching gallery posts:", err);
    return NextResponse.json(
      { error: "Unexpected error occurred" },
      { status: 500 },
    );
  }
}
