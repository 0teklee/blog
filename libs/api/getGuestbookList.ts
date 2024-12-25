import { NextRequest, NextResponse } from "next/server";
import { maskPrivateContent } from "@/libs/utils";
import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const user = searchParams.get("user");
  const cursor = parseInt(searchParams.get("cursor") || "0");
  const limit = 5; // Number of posts per page
  const offset = cursor * limit;

  try {
    const supabase = createServerClient(
      process.env.SUPABASE_URL!,
      process.env.SUPABASE_ANON_KEY!,
      {
        cookies: cookies(),
      },
    );

    const { data: posts, error } = await supabase
      .from("GuestBookPost")
      .select(
        `
        id,
        createdAt,
        author,
        email,
        post,
        isPrivate,
        comments:GuestBookComment (
          id,
          createdAt,
          author,
          email,
          isPrivate,
          comment
        )
      `,
      )
      .order("createdAt", { ascending: false })
      .range(offset, offset + limit - 1);

    if (error) {
      console.error("Error fetching guestbook posts:", error.message);
      return NextResponse.json(
        { message: "Failed to fetch guestbook posts." },
        { status: 500 },
      );
    }

    if (!posts) {
      return NextResponse.json(
        { message: "No guestbook posts found." },
        { status: 404 },
      );
    }

    const processedPosts = posts.map((post) =>
      maskPrivateContent(post, user || ""),
    );

    const response = NextResponse.json(processedPosts);
    response.headers.set("Cache-Control", "max-age=180000");
    return response;
  } catch (e) {
    console.error("Unexpected error fetching guestbook posts:", e);
    return NextResponse.json(
      { message: "An unexpected error occurred.", error: e },
      { status: 501 },
    );
  }
}
