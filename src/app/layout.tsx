import { Providers } from "@/components/provider";
import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";

const nunitoSans = Nunito_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Bookwise",
    default: "Bookwise",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body
        className={`${nunitoSans.className} min-h-screen bg-ds-gray-800 p-5 text-ds-gray-100 antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
