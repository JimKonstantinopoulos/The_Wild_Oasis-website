import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

const authConfig = {
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],
  //Is going to be called when the user tries to access the /account route that middleware protects
  callbacks: {
    authorized({ auth, request }) {
      //If user is not logged in this returns false and automatically redirects user to google's signin page
      return !!auth?.user;
    },
  },
};

export const {
  auth,
  handlers: { GET, POST },
} = NextAuth(authConfig);
