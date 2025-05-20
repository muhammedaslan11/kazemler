import React, { useState, useEffect } from "react";
import Link from "next/link";
import Button from "../common/Button";

const navLinks = [
  { id: "about", label: "About", href: "/about" },
  { id: "services", label: "Services", href: "/services" },
];

const Header = () => {

  return (
    <>
      <header
        className={"absolute top-0 w-full z-30 bg-transparent transition-all"}>
        <nav className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto grid grid-flow-col py-3 sm:py-4">
          <div className="col-start-1 col-end-2 flex items-center text-white font-bold">
            <Link href="/">
              <picture>
                <img
                  src="/images/kazemler_logo.png"
                  alt="Logo"
                  className="object-cover"
                  width={200}
                  height={50}
                />
              </picture>
            </Link>
          </div>

          <ul className="hidden lg:flex col-start-4 col-end-8 items-center">
            {navLinks.map(({ id, label, href }) => (
              <li key={id}>
                <Link href={href} className="px-4 py-2 mx-2 text-gray-300 hover:text-[#DF9958] transition-colors duration-300 capitalize">
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="col-start-10 col-end-12 font-medium flex justify-end items-center">
            <Button href="/contact" type="link">
              Contact
            </Button>
          </div>
        </nav>
      </header>

      {/* Mobile Navigation */}
      <nav className="fixed lg:hidden bottom-0 left-0 right-0 z-20 px-4 sm:px-8 shadow-t">
        <div className="bg-black sm:px-3">
          <ul className="flex w-full justify-between items-center text-gray-300">
            {navLinks.map(({ id, label, href }) => (
              <li key={id}>
                <Link href={href} className="mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 border-transparent hover:text-[#DF9958] transition-all">
                  <svg
                    className="w-6 h-6 mb-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d={
                        id === "about"
                          ? "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          : id === "feature"
                            ? "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                            : "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      }
                    />
                  </svg>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
