import type { NextAuthConfig } from "next-auth";

export const authConfig = {
  pages: {
    signIn: "/login",
  },
  callbacks: {
    // authorized({ auth, request: { nextUrl } }) {
    //   const isLoggedIn = !!auth?.user;
    //   const isOnLoginPage = nextUrl.pathname.startsWith("/login");

    //   if (isLoggedIn && isOnLoginPage) {
    //     return Response.redirect(new URL("/dashboard", nextUrl));
    //   }

    //   if (!isLoggedIn && !isOnLoginPage) {
    //     return false;
    //   }

    //   return true;
    // },
  },
  providers: [],
} satisfies NextAuthConfig;
