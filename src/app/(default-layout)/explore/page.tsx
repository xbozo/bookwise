import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Explorar",
};

export default function Explore() {
  return (
    <h1>
      Explore!
      <Link href="/home">Home</Link>
    </h1>
  );
}
