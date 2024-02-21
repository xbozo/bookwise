"use client";

import { signIn } from "next-auth/react";

export function SignInOptions() {
  return (
    <div className="flex flex-col gap-3">
      <button onClick={() => signIn("google")}>
        <img src="/images/google-logo.svg" alt="Entrar com Google" />
      </button>

      <button onClick={() => signIn("github")}>
        <img src="/images/github-logo.svg" alt="Entrar com GitHub" />
      </button>

      <button>
        <img src="/images/guest-logo.svg" alt="Acessar como visitante" />
      </button>
    </div>
  );
}
