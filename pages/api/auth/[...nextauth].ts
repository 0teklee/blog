import NextAuth, { NextAuthOptions } from "next-auth";
import Github from "next-auth/providers/github";
import TwitterProvider from "next-auth/providers/twitter";
import Google from "next-auth/providers/google";

export const authOptions: NextAuthOptions = {
  providers: [
    Github({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    TwitterProvider({
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      version: "2.0",
    }),
    Google({
      clientId: process.env.GUESTBOOK_GAUTH_CLIENT_ID,
      clientSecret: process.env.GUESTBOOK_GAUTH_CLIENTPW,
    }),
  ],
  secret: process.env.NEXT_SECRET,
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, account }) {
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
  },
};

export default NextAuth(authOptions);
