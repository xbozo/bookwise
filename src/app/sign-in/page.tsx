import { Metadata } from "next";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { SignInOptions } from "./sign-in-options";

export const metadata: Metadata = {
  title: "Entrar",
};

export default async function SignIn() {
  const session = await getServerSession(authOptions);

  if (session) {
    return redirect("/home");
  }

  return (
    <div className="flex h-[calc(100vh-40px)]">
      <section className="relative flex w-1/3 items-center justify-center  rounded-xl bg-gradient-to-tr from-ds-green-200 to-ds-purple-200">
        <img alt="" src="/logo.svg" />

        <div className="absolute size-full rounded-xl bg-sign-in-bg bg-cover bg-no-repeat opacity-15" />
      </section>

      <section className="flex w-2/3 flex-col items-center justify-center">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-1.5">
            <h1 className="text-2xl font-bold leading-4">Boas vindas!</h1>
            <p className="text-ds-gray-300">
              Faça seu login ou acesse como visitante.
            </p>
          </div>

          <SignInOptions />
        </div>
      </section>
    </div>
  );
}
