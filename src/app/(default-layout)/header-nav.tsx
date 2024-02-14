"use client";

import { Binoculars, ChartLineUp, User } from "@phosphor-icons/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
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

  const pathname = usePathname();

  useEffect(() => {
    const isLogged = true;

    if (!isLogged) {
      const noAuthNavItems = _navItems.filter((item) => item.name !== "Perfil");
      setNavItems(noAuthNavItems);
    }
  }, []);

  return (
    <nav>
      <ul className="space-y-4">
        {navItems.map((item, index) => {
          if (item.href === pathname) {
            return (
              <li key={index}>
                <Link
                  href={item.href}
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
                href={item.href}
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

      <button className="flex items-center gap-3 text-start text-ds-gray-400"></button>
    </nav>
  );
}
