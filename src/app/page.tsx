import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function Index() {
  const userSession = await getServerSession(authOptions);

  if (!userSession) {
    return redirect("/sign-in");
  }

  return redirect("/home");
}
