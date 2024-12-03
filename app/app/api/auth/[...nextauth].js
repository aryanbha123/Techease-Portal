import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  cookies: {
    sessionToken: {
      name: `__Secure-next-auth.session-token`, // Cookie name
      options: {
        httpOnly: true,        // Prevents client-side access
        sameSite: "lax",       // Cross-site protection
        secure: process.env.NODE_ENV === "production", // Use HTTPS in production
      },
    },
  },
};

export default NextAuth(authOptions);
