import React from "react";
import Link from "next/link";
import Button from "../common/Button";

const navLinks = [
  { id: "about", label: "Hakkımızda", href: "/about" },
  { id: "catalogs", label: "Kataloglar", href: "/catalogs" },
  { id: "services", label: "Hizmetler", href: "/services" },
  { id: "contact", label: "İletişim", href: "/contact" }, // buraya contact eklendi
];

const Header = () => {
  return (
    <>
      <header className={"absolute top-0 w-full z-30 bg-transparent transition-all"}>
        <nav className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto grid grid-flow-col py-3 sm:py-4">
          <div className="col-start-1 col-end-2 flex items-center justify-center text-white">
            <Link href="/">
              <picture>
                <img
                  src="/images/kazemler_logo.png"
                  alt="Logo"
                  className="object-cover"
                  style={{ width: "300px", height: "auto" }}
                />
              </picture>
            </Link>
          </div>

          <ul className="hidden lg:flex col-start-4 col-end-8 items-center">
            {navLinks.slice(0, 3).map(({ id, label, href }) => (
              <li key={id}>
                <Link
                  href={href}
                  className="px-4 py-2 mx-2 text-gray-300 hover:text-[#DF9958] transition-colors duration-300 capitalize"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="col-start-10 col-end-12 font-medium hidden lg:flex justify-end items-center">
            <Button href="/contact" type="link">
              İletişim
            </Button>
          </div>
        </nav>
      </header>

      <nav className="fixed lg:hidden bottom-0 left-0 right-0 z-2000 shadow-t">
        <div className="bg-black sm:px-3">
          <ul className="flex w-full justify-between items-center text-gray-300">
            {navLinks.map(({ id, label, href }) => (
              <li key={id}>
                <Link
                  href={href}
                  className="mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 border-transparent hover:text-[#DF9958] transition-all"
                >
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
                          ? "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" // info icon
                          : id === "catalogs"
                            ? "M12 19l7-4V7l-7-4-7 4v8l7 4z M12 7v10" // kitap / katalog ikonu
                            : id === "services"
                              ? "M12 8v4l3 3m4-6a9 9 0 11-6-6" // ayar ikonu (settings)
                              : id === "contact"
                                ? "M21 8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2h14a2 2 0 002-2V8z M3 6l9 7 9-7" // mail zarfı ikonu
                                : ""
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
