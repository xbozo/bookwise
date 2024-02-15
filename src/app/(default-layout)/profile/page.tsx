import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

export default async function Profile() {
  const userData = await getServerSession(authOptions);

  return <div>bom dia, {userData?.user.name}</div>;
}
