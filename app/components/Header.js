"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menus = [
    { name: "Home", href: "/" },
    { name: "Categories", href: "/categories" },
    { name: "State", href: "/state" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">

        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold text-blue-600"
        >
          Logo
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          {menus.map((menu) => (
            <Link
              key={menu.name}
              href={menu.href}
              className="font-medium text-gray-700 transition hover:text-blue-600"
            >
              {menu.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden"
        >
          {isOpen ? (
            <X className="h-7 w-7" />
          ) : (
            <Menu className="h-7 w-7" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden transition-all duration-300 md:hidden ${
          isOpen ? "max-h-80" : "max-h-0"
        }`}
      >
        <nav className="border-t bg-white">
          {menus.map((menu) => (
            <Link
              key={menu.name}
              href={menu.href}
              onClick={() => setIsOpen(false)}
              className="block border-b px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
            >
              {menu.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;