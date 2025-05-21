import React from "react";
import { Icon } from "../common/Icon";
import Link from "next/link";

const Footer = () => {
  const corporateLinks = [
    { label: "Hakkımızda", href: "/about" },
    { label: "Kataloglar", href: "/catalogs" },
    { label: "İletişim", href: "/contact" },
    { label: "Gizlilik & KVKK", href: "/privacy" },
  ];

  const servicesLinks = [
    { label: "Web Hizmetleri", href: "/services/web" },
    { label: "Üretim - İhracat", href: "/services/export" },
    { label: "Danışmanlık", href: "/services/consulting" },
  ];

  return (
    <footer
      className="relative pt-40 text-gray-300 border-t pb-20 overflow-hidden"
      style={{ backgroundImage: "url(/images/plazas.jpg)" }}
    >
      <div className="absolute inset-0 bg-black/85" />
      <div className="relative max-w-screen-xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-12 gap-10">
        <div className="sm:col-span-5 flex flex-col">
          <h2 className="text-3xl font-extrabold text-white mb-3 tracking-wide shadow-lg">
            <Link href="/">
              <picture>
                <img
                  src="/images/kazemler_logo.png"
                  alt="Logo"
                  className="object-cover shadow-lg"
                  width={200}
                  height={50}
                />
              </picture>
            </Link>
          </h2>
          <p className="text-sm leading-relaxed mb-6 shadow-lg">
            Danışmanlık, üretim ve ticaret alanlarında faaliyet gösteren KAZEMLER, güçlü iş ortaklıkları ve yenilikçi yaklaşımıyla sektörde öncüdür.
          </p>
          <div className="flex gap-3">
            <a
              href="#"
              className="p-2 rounded-lg bg-black shadow-md hover:bg-[#DF9958] hover:text-white transition"
            >
              <Icon iconName="facebook" size={24} color="#fff" />
            </a>
            <a
              href="#"
              className="p-2 rounded-lg bg-black shadow-md hover:bg-[#DF9958] hover:text-white transition"
            >
              <Icon iconName="instagram" size={24} color="#fff" />
            </a>
            <a
              href="#"
              className="p-2 rounded-lg bg-black shadow-md hover:bg-[#DF9958] hover:text-white transition"
            >
              <Icon iconName="x" size={24} color="#fff" />
            </a>
          </div>
        </div>

        <div className="sm:col-span-3">
          <h3 className="text-xl font-semibold text-white mb-4 shadow-lg">
            Kurumsal
          </h3>
          <ul className="space-y-3 text-sm">
            {corporateLinks.map(({ label, href }) => (
              <li key={href}>
                <Link href={href} className="hover:text-[#DF9958] transition">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="sm:col-span-4">
          <h3 className="text-xl font-semibold text-white mb-4 shadow-lg">
            Hizmetlerimiz
          </h3>
          <ul className="space-y-3 text-sm">
            {servicesLinks.map(({ label, href }) => (
              <li key={href}>
                <Link href={href} className="hover:text-[#DF9958] transition">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="relative mt-10 border-t pt-5 text-center text-sm shadow-lg">
        © {new Date().getFullYear()} <strong className="text-white">KAZEMLER</strong>. Tüm hakları saklıdır.
      </div>
    </footer>
  );
};

export default Footer;
