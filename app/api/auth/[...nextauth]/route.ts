import NextAuth, { AuthOptions } from "next-auth";
import Github from "next-auth/providers/github";
import Google from "next-auth/providers/google";

export const authOptions: AuthOptions = {
  providers: [
    Github({
      clientId: process.env.GITHUB_ID || "",
      clientSecret: process.env.GITHUB_SECRET || "",
    }),
    Google({
      clientId: process.env.GUESTBOOK_GAUTH_CLIENT_ID || "",
      clientSecret: process.env.GUESTBOOK_GAUTH_CLIENTPW || "",
    }),
  ],
  secret: process.env.NEXT_SECRET,
  session: {
    strategy: "jwt",
  },
  useSecureCookies: true,
  debug: true,
  callbacks: {
    async jwt({ token, account }) {
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
