import { ReactNode } from "react";

type PageTitleProps = {
  children: ReactNode;
  title: string;
};

export function PageTitle({ children, title }: PageTitleProps) {
  return (
    <div className="flex items-center gap-3">
      {children}
      <h1 className="text-2xl font-bold leading-6">{title}</h1>
    </div>
  );
}
