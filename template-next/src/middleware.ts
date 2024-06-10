// Example middleware

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Debugging output
  console.log("Request path:", pathname);
  console.log("Cookies:", request.cookies);

  // Attempt to get the authToken cookie
  const authToken = request.cookies["authToken"];

  // Debugging output
  console.log("AuthToken:", authToken);

  // Check if authToken is not present and the current path is not the login page
  if (!authToken && !pathname.includes("/login")) {
    console.log("Redirecting to login because authToken is missing and path is not /login.");
    const url = request.nextUrl.clone();
    url.pathname = "/login";
    console.log("should redirect");
    // return NextResponse.redirect(url);
  }

  console.log("Proceeding with normal request flow.");
  return NextResponse.next();
}
