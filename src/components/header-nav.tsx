"use client";

import {
  Binoculars,
  ChartLineUp,
  SignIn,
  SignOut,
  User,
} from "@phosphor-icons/react";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
// import signInIcon from "public/images/sign-in.svg";
import { useEffect, useState } from "react";

const _navItems = [
  {
    name: "Início",
    icon: <ChartLineUp size={24} />,
    href: "/home",
  },
  {
    name: "Explorar",
    icon: <Binoculars size={24} />,
    href: "/explore",
  },
  {
    name: "Perfil",
    icon: <User size={24} />,
    href: "/profile",
  },
];

export function HeaderNav() {
  const [navItems, setNavItems] = useState(_navItems);
  const { data: userData } = useSession();

  const pathname = usePathname();

  useEffect(() => {
    const isLogged = true;

    if (!isLogged) {
      const noAuthNavItems = _navItems.filter((item) => item.name !== "Perfil");
      setNavItems(noAuthNavItems);
    }
  }, []);

  return (
    <nav className="flex h-full flex-col items-center">
      <ul className="space-y-4">
        {navItems.map((item, index) => {
          if (item.href === "profile") {
            if (!userData) return;

            return;
          }

          console.log("pathname", pathname);
          console.log("href", item.href);
          console.log(pathname.includes(item.href));

          if (pathname.includes(item.href)) {
            return (
              <li key={index}>
                <Link
                  href={
                    item.href === "/profile"
                      ? `/profile/${userData?.user.id}`
                      : `${item.href}`
                  }
                  className="flex items-center gap-3 text-start text-ds-gray-100"
                >
                  <div className="h-6 w-1 rounded-lg bg-gradient-to-t from-ds-purple-100 to-ds-green-100" />

                  {item.icon}

                  <span className="font-bold leading-4">{item.name}</span>
                </Link>
              </li>
            );
          }

          return (
            <li key={index}>
              <Link
                href={
                  item.href === "/profile"
                    ? `/profile/${userData?.user.id}`
                    : `${item.href}`
                }
                className="flex items-center gap-3 text-start text-ds-gray-400"
              >
                <div className="h-6 w-1 rounded-lg bg-gradient-to-t from-ds-purple-100 to-ds-green-100 opacity-0" />

                {item.icon}

                <span className="leading-4">{item.name}</span>
              </Link>
            </li>
          );
        })}
      </ul>

      {userData ? (
        <div className="mt-auto flex items-center gap-3">
          <div className="flex h-[34px] w-[34px] items-center justify-center rounded-full bg-gradient-to-r from-ds-green-100 to-ds-purple-100">
            <Image
              src={userData.user.avatar_url}
              width={32}
              height={32}
              alt="Usuário"
              className="rounded-full"
            />
          </div>

          <span className="font-sm leading-4 text-ds-gray-200">
            {userData.user.name}
          </span>

          <button onClick={() => signOut()}>
            <SignOut
              color="#F75A68"
              className="hover:brightness-75"
              size={22}
            />
          </button>
        </div>
      ) : (
        <Link
          href="/sign-in"
          className="mx-auto mt-auto flex items-center gap-3 text-start text-ds-gray-400"
        >
          <div className="flex items-center gap-2">
            <span className="font-bold text-ds-gray-200">Fazer login</span>

            <SignIn color="#50B2C0" size={22} />
          </div>
        </Link>
      )}
    </nav>
  );
}
