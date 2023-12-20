import GoogleProvider from "next-auth/providers/google";

import { createUser } from "@/app/lib/db/create-user.js";
import { readUser } from "@/app/lib/db/read-user.js";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
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
