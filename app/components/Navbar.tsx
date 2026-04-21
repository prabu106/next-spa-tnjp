"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Projects", href: "/project" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* Navbar */}
      <nav className="text-white shadow-lg items-center gap-8 text-base font-bold lg:flex">
        <div className="">

          {/* Left Section */}
          <div className="flex items-center gap-3">

            {/* Mobile Hamburger */}
            <button
              className="lg:hidden text-2xl"
              onClick={() => setIsOpen(true)}
            >
              ☰
            </button>

          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8 font-bold">

            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative transition duration-300 ${pathname === item.href
                  ? "text-orange-400"
                  : "text-white/90 hover:text-orange-400"
                  }`}
              >
                {item.label}

                {/* Active underline */}
                {pathname === item.href && (
                  <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-orange-400 rounded"></span>
                )}
              </Link>
            ))}

            {/* Login Button */}
            <button className="rounded-md bg-[linear-gradient(180deg,#f6a028_0%,#ea7d16_100%)] px-5 py-2.5 text-sm font-bold text-white shadow-[0_8px_20px_rgba(234,125,22,0.35)] transition hover:brightness-105">
              Login
            </button>
          </div>
        </div>
      </nav>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-72 bg-gradient-to-b from-blue-900 to-blue-700 text-white z-50 transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-5 border-b border-blue-600">
          <span className="font-bold text-lg">Menu</span>
          <button
            className="text-2xl"
            onClick={() => setIsOpen(false)}
          >
            ✕
          </button>
        </div>

        {/* Menu Items */}
        <div className="flex flex-col p-5 space-y-5 text-lg">

          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className={`transition ${pathname === item.href
                ? "text-orange-400 font-semibold"
                : "text-white/90 hover:text-orange-400"
                }`}
            >
              {item.label}
            </Link>
          ))}

          <hr className="border-blue-600" />

          {/* Login */}
          <button className="bg-orange-500 hover:bg-orange-600 py-2 rounded-lg shadow-md transition">
            Login
          </button>
        </div>
      </div>
    </>
  );
}