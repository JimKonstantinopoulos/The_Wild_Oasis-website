import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

const authConfig = {
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],
  callbacks: {
    //This will check if the user exists to authorize him the access to the pages that have been assigned to middleware
    authorized({ auth, request }) {
      //Convert this value into boolean
      return !!auth?.user;
    },
  },
  pages: {
    //Assign this page to show instead of the default auth sigin page
    signIn: "/login",
  },
};

export const {
  auth,
  signIn,
  signOut,
  handlers: { GET, POST },
} = NextAuth(authConfig);
