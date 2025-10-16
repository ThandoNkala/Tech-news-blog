// app/api/auth/[...nextauth]/route.ts
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import clientPromise from "@/lib/mongodb-client";

export const authOptions = {
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  pages: { signIn: "/signin" },
  callbacks: {
    async jwt({ token, user }) {
      // Prefer DB user.id when available, else fall back to token.sub (default user id)
      const userId = (user as any)?.id || (token as any)?.id || token.sub;
      if (userId) token.id = userId as string;
      return token;
    },
    async session({ session, token }) {
      const tid = (token as any)?.id || token.sub;
      if (session.user && tid) (session.user as any).id = tid as string;
      return session;
    },
  },
};

export const runtime = "nodejs";

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
