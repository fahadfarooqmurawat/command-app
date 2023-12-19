import { createUser } from "@/app/lib/db/create-user.js";
import { readUser } from "@/app/lib/db/read-user.js";
import FacebookProvider from "next-auth/providers/facebook";

export const authOptions = {
  providers: [
    FacebookProvider({
      clientId: process.env.FB_CLIENT_ID,
      clientSecret: process.env.FB_CLIENT_SECRET,
    }),
  ],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (!user) return token;

      const { email, name } = user;
      const dbUser =
        (await readUser({ user_email: email })) ??
        (await createUser({ user_name: name, user_email: email }));

      token.user_id = dbUser.user_id;

      return token;
    },
    async session({ session, token }) {
      session.user.user_id = token.user_id;

      return session;
    },
  },
};
