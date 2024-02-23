import { HeaderNav } from "@/components/header-nav";
import { ReactNode } from "react";

export default function DefaultLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex gap-24 p-5">
      <header className="flex max-h-[1000px] min-h-[calc(100vh-40px)] w-60 flex-col items-center rounded-xl bg-side-header-bg bg-cover bg-no-repeat p-5">
        <img src="/logo.svg" alt="" className="h-32 w-32" />

        <HeaderNav />
      </header>

      <main className="mx-auto mt-10 flex w-full max-w-7xl flex-col gap-10">
        {children}
      </main>
    </div>
  );
}
