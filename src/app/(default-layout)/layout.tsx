import { ReactNode } from "react";
import { HeaderNav } from "./header-nav";

export default function DefaultLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex gap-24">
      <header className="flex min-h-[calc(100vh-40px)] w-60 flex-col items-center rounded-xl bg-side-header-bg bg-cover bg-no-repeat p-5">
        <img src="/logo.svg" alt="" className="h-32 w-32" />

        <HeaderNav />
      </header>

      <div className="mx-auto mt-10 w-full max-w-7xl">{children}</div>
    </div>
  );
}
