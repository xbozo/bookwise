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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body
        className={`${nunitoSans.className} bg-ds-gray-800 text-ds-gray-100 p-5 min-h-screen antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
