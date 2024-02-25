import "next-auth";

declare module "next-auth" {
  interface User {
    id: string | number;
    name: string;
    email: string;
    avatar_url: string | null;
  }

  interface Session {
    user: User;
  }
}
