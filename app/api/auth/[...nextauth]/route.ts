import NextAuth, { AuthOptions } from "next-auth";
import Github from "next-auth/providers/github";
import Google from "next-auth/providers/google";

const providers = [
  Github({
    clientId: process.env.GITHUB_ID as string,
    clientSecret: process.env.GITHUB_SECRET as string,
    client: {
      client_secret: process.env.GITHUB_SECRET as string,
      client_id: process.env.GITHUB_ID as string,
    },
  }),
  Google({
    clientId: process.env.GUESTBOOK_GAUTH_CLIENT_ID as string,
    clientSecret: process.env.GUESTBOOK_GAUTH_CLIENTPW as string,
  }),
];

export const authOptions: AuthOptions = {
  providers,
  secret: process.env.NEXT_SECRET as string,
  session: {
    strategy: "jwt",
  },
  useSecureCookies: true,
  debug: true,
  callbacks: {
    async signIn({ profile }) {
      console.log("signIn", profile);
      return profile?.name === "0teklee";
    },
  },
  // @ts-ignore
  async jwt({ token, account }) {
    if (account) {
      token.accessToken = account.access_token;
    }
    return token;
  },
  // @ts-ignore
  async session({ session }) {
    console.log("session", session);
    return session;
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
