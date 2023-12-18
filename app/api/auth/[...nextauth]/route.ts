import NextAuth from "next-auth";
import FacebookProvider from "next-auth/providers/facebook";

const handler = NextAuth({
  pages: {
    signIn: "/login",
  },
  providers: [
    FacebookProvider({
      clientId: process.env.FB_CLIENT_ID || "",
      clientSecret: process.env.FB_CLIENT_SECRET || "",
    }),
    
  ],
});

export { handler as GET, handler as POST };
