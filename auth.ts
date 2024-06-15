import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import Google from "next-auth/providers/google"
import mongoose from "mongoose"
import User from "./models/User"
import Payments from "./models/Payments"
import db from "./lib/mongoose"
 
export const { auth, handlers, signIn, signOut } = NextAuth({
  providers: [
    Google({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      await db();

      if(account!.provider=="github" || account!.provider=="google"){
        const currentUser = await User.findOne({email:profile?.email})
        if(!currentUser){
          const newUser = new User({
            email: profile?.email,
            username: profile?.name
          })
          await newUser.save()
        }
        return true;
      }
      return false;
    },
  },
  secret: process.env.NEXT_PUBLIC_SECRET
})