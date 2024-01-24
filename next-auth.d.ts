import NextAuth, { DefaultSession } from "next-auth";
import { JWT } from "next-auth/jwt";


import NextAuth from "next-auth"

declare module "next-auth" {
  interface User {
    role: "ADMIN" | "USER"
    token: string 
    
  }
}



// export type ExtendedUser = DefaultSession['user'] & {
//   user: {
//     role: 'ADMIN' | 'USER'
//   }
// }

// declare module "next-auth" {
//   interface Session {
//     /** The user's postal address. */
//     user: ExtendedUser
//   }
// }


// declare module "next-auth/jwt" {
//   interface JWT {
//     role?: "ADMIN" | "USER"
//   }
// }


