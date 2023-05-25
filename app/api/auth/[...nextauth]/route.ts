import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        name: { label: "Name", type: "text", placeholder: "Enter your name" },
        password: {
          label: "Name",
          type: "text",
          placeholder: "Enter your Password",
        },
      },
      async authorize(credentials, req) {
        const user = { id: "1", name: "J Smith", email: "jsmith@example.com" };

        return user;
      },
    }),
  ],
  secret: process.env.SECRET_KEY,
  session: { strategy: "jwt" },
  theme: { colorScheme: "light" },
  // pages: { signIn: "/auth", newUser: "/auth", signOut: "/" },
  debug: process.env.NODE_ENV !== "production",
});

export { handler as GET, handler as POST };
