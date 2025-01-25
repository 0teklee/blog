import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;

  if (request.nextUrl.pathname === "/blog" && !searchParams.get("page")) {
    const url = request.nextUrl.clone();
    url.searchParams.set("page", "1");
    return NextResponse.redirect(url);
  }
}

export const config = {
  matcher: "/blog",
};
