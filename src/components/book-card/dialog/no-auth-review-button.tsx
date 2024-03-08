"use client";

import { X } from "@phosphor-icons/react";
import * as Dialog from "@radix-ui/react-dialog";
import { signIn, useSession } from "next-auth/react";

export function NoAuthReviewButton() {
  const { data: userData } = useSession();

  if (userData) {
    return;
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button type="button" className="font-bold text-ds-purple-100">
          Avaliar
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-40 bg-black/70 p-5" />

        <Dialog.Content className="fixed left-1/2 top-1/2 z-50 mx-auto flex min-w-[515px] -translate-x-1/2 -translate-y-1/2 flex-col items-center rounded-md bg-ds-gray-700 p-5 pb-14 outline-none">
          <div className="ml-auto">
            <Dialog.Close asChild>
              <X className="size-6 text-ds-gray-400 hover:cursor-pointer" />
            </Dialog.Close>
          </div>

          <span className="mb-10 mt-5">
            Faça login para deixar sua avaliação
          </span>

          <div className="flex flex-col gap-4">
            <button onClick={() => signIn("google")}>
              <img src="/images/google-logo.svg" alt="Entrar com Google" />
            </button>

            <button onClick={() => signIn("github")}>
              <img src="/images/github-logo.svg" alt="Entrar com GitHub" />
            </button>
          </div>
        </Dialog.Content>

        {/* <Dialog.Content className="fixed bottom-0 right-0 top-0 min-h-screen w-[660px] space-y-5 overflow-y-scroll bg-ds-gray-800 px-12 py-10 outline-none"> */}
      </Dialog.Portal>
    </Dialog.Root>
  );
}
