import React from "react";
import { Icon } from "../common/Icon";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative pt-40 text-gray-300 border-t pb-20 overflow-hidden" style={{ backgroundImage: 'url(/images/plazas.jpg)' }}>
      <div className="absolute inset-0 bg-black/85" />
      <div className="relative max-w-screen-xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-12 gap-10">
        <div className="sm:col-span-5 flex flex-col">
          <h2 className="text-3xl font-extrabold text-white mb-3 tracking-wide shadow-lg">
            <Link href="/">
              <picture>
                <img src="/images/kazemler_logo.png" alt="Logo" className="object-cover shadow-lg" width={200} height={50} />
              </picture>
            </Link>
          </h2>
          <p className="text-sm leading-relaxed mb-6 shadow-lg">
            Operating in the fields of consulting, production, and trade, KAZEMLER is a pioneer in the industry with strong partnerships and an innovative approach.
          </p>
          <div className="flex gap-3">
            <a href="#" className="p-2 rounded-full bg-neutral-800 shadow-md hover:bg-blue-500 hover:text-white transition">
              <Icon iconName="facebook" size={24} color="#fff" />
            </a>
            <a href="#" className="p-2 rounded-full bg-neutral-800 shadow-md hover:bg-blue-500 hover:text-white transition">
              <Icon iconName="instagram" size={24} color="#fff" />
            </a>
            <a href="#" className="p-2 rounded-full bg-neutral-800 shadow-md hover:bg-blue-500 hover:text-white transition">
              <Icon iconName="x" size={24} color="#fff" />
            </a>
          </div>
        </div>

        <div className="sm:col-span-3">
          <h3 className="text-xl font-semibold text-white mb-4 shadow-lg">Corporate</h3>
          <ul className="space-y-3 text-sm">
            <li className="hover:text-blue-500 transition cursor-pointer">About Us</li>
            <li className="hover:text-blue-500 transition cursor-pointer">Contact</li>
            <li className="hover:text-blue-500 transition cursor-pointer">Privacy & KVKK</li>
          </ul>
        </div>

        <div className="sm:col-span-4">
          <h3 className="text-xl font-semibold text-white mb-4 shadow-lg">Our Services</h3>
          <ul className="space-y-3 text-sm">
            <li className="hover:text-blue-500 transition cursor-pointer">Consulting</li>
            <li className="hover:text-blue-500 transition cursor-pointer">Production</li>
            <li className="hover:text-blue-500 transition cursor-pointer">Trade</li>
          </ul>
        </div>
      </div>

      <div className="relative mt-10 border-t pt-5 text-center text-sm shadow-lg">
        © {new Date().getFullYear()} <strong className="text-white">KAZEMLER</strong>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;