import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import FacebookProvider from "next-auth/providers/facebook";
import GoogleProvider from "next-auth/providers/google";

import { ENV } from "@/source/utils/environment";
import prisma from "@/source/utils/prisma";
import { PrismaAdapter } from "@next-auth/prisma-adapter";

const handler = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: ENV.GOOGLE_CLIENT_ID,
      clientSecret: ENV.GOOGLE_CLIENT_SECRET,
    }),
    FacebookProvider({
      clientId: ENV.FACEBOOK_CLIENT_ID,
      clientSecret: ENV.FACEBOOK_CLIENT_SECRET,
    }),
    CredentialsProvider({
      name: "credentials",
      credentials: {
        username: {
          label: "Username",
          type: "text",
          placeholder: "Enter your name",
        },
        phoneOrEmail: {
          label: "Phone Or Email",
          type: "text",
          placeholder: "Enter your Phone Or Email",
        },
        password: {
          label: "Name",
          type: "text",
          placeholder: "Enter your Password",
        },
      },
      async authorize(credentials, req) {
        console.log("xxxxxxxxx");
        if (
          (!credentials?.username || !credentials?.phoneOrEmail) &&
          !credentials?.password
        ) {
          return null;
        }
        // console.log(credentials);
        const user1 = await prisma.user.findUnique({
          where: {
            email: credentials.phoneOrEmail,
            username: credentials.username,
          },
        });
        const user2 = await prisma.user.findUnique({
          where: {
            phone: credentials.phoneOrEmail,
          },
        });

        // const demo: User = {
        //   id: "1",
        //   role: "USER",
        //   username: "user-kk",
        //   email: "shrikajol@gmail.com",
        //   image: "demo-images.png",
        //   name: "Kajol Roy",
        // };
        return null;
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  secret: process.env.NEXTAUTH_SECRET,
  session: { strategy: "jwt" },
  theme: { colorScheme: "light" },
  // pages: { signIn: "/auth", newUser: "/auth", signOut: "/" },
  debug: process.env.NODE_ENV !== "production",
  callbacks: {
    async jwt({ token, user }) {
      if (token && user) {
        (token.role = user.role), (token.username = user.username);
      }
      return token;
    },
    async session({ session, token }) {
      if (token && session.user) {
        session.user.role = token.role;
        session.user.username = token.username;
      }
      return session;
    },
  },
});

export { handler as GET, handler as POST };
