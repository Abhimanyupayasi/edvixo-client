/**
 * Extends NextAuth's built-in TypeScript types to include
 * the custom `id` and `role` fields we attach in auth.ts.
 */
import type { DefaultSession, DefaultUser } from "next-auth";
import type { DefaultJWT } from "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      role: "admin" | "client";
      name: string;
      email: string;
      image?: string;
    } & DefaultSession["user"];
  }

  interface User extends DefaultUser {
    role?: "admin" | "client";
  }
}

declare module "next-auth/jwt" {
  interface JWT extends DefaultJWT {
    id?: string;
    role?: "admin" | "client";
  }
}
