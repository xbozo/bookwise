import { ReactNode } from "react";
import { HeaderNav } from "./header-nav";

export default function DefaultLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex gap-14">
      <header className="rounded-xl w-60 min-h-[calc(100vh-40px)] bg-side-header-bg bg-cover bg-no-repeat flex flex-col items-center p-5">
        <img src="/logo.svg" alt="" className="h-32 w-32" />

        <HeaderNav />
      </header>

      <div className="mt-7">{children}</div>
    </div>
  );
}
