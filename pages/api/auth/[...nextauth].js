import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"
const bcrypt = require('bcrypt');

const prisma = new PrismaClient()

export default NextAuth({
  // Configure one or more authentication providers
  adapter: PrismaAdapter(prisma),
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    CredentialsProvider({
      name:"SignIn With Credentials",
      credentials:{
        username:{
          label:"Email",
          type:"email",
          placeholder:"Enter your Email"
        },
        password:{
          label:"Password",
          type:"password"
        }
      },
      async authorize(credentials, req) {
        const email = credentials.username;
        let user =   await prisma.user.findUnique({ where: { email } })
        
        if(user == null){
          return user;
        }
        const validPassword = await bcrypt.compare(credentials.password, user.password);
        if(validPassword){
          return user;
        }
        return null;
      },
      
    })
    // ...add more providers here
  ],
  session: {
    // Set to jwt in order to CredentialsProvider works properly
    strategy: 'jwt'
  },
  pages: {
    signIn: '/auth/signin',
    //signOut: '/auth/signout',
    //error: '/auth/error', // Error code passed in query string as ?error=
    //verifyRequest: '/auth/verify-request', // (used for check email message)
    //newUser: '/auth/new-user' // New users will be directed here on first sign in (leave the property out if not of interest)
  },
  database: process.env.DATABASE_URL,
})