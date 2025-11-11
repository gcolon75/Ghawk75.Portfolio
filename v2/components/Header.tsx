"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/writing", label: "Writing" },
];

export const Header: React.FC = () => {
  const pathname = usePathname();

  return (
    <header className="bg-white border-b border-gray-lighter">
      <nav className="max-w-6xl mx-auto px-4 py-4" aria-label="Main navigation">
        <ul className="flex gap-8 items-center">
          <li className="font-bold text-lg mr-auto">
            <Link href="/" className="hover:text-teal transition-colors">
              Portfolio v2
            </Link>
          </li>
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`hover:text-teal transition-colors ${
                  pathname === link.href ? "text-teal font-semibold" : ""
                }`}
                aria-current={pathname === link.href ? "page" : undefined}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
