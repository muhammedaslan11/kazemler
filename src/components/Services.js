import React, { useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import Button from "./common/Button";

const plans = [
  {
    name: "Web Hizmetleri",
    image: "/images/web_service_white.png",
    href: "/services/web",
    features: [
      "Kurumsal Web Sitesi",
      "SEO Uyumlu Yapı",
      "Mobil Uyumlu Tasarım",
      "Teknik Destek",
    ],
  },
  {
    name: "Üretim - İhracat",
    image: "/images/export.png",
    href: "/services/export",
    features: [
      "Ürün Tedarik Yönetimi",
      "İhracat Süreç Takibi",
      "Üretici ve Toptancı Ağı",
      "Lojistik Danışmanlığı",
      "Ürün Araştırması",
    ],
  },
  {
    name: "Danışmanlık",
    image: "/images/consulting.png",
    href: "/services/consulting",
    features: [
      "Pazar Araştırması",
      "Kozmetik Ürün Danışmanlığı",
      "Marka Geliştirme",
      "Ve Çok Daha Fazlası...",
    ],
  },
];

const Services = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div className="bg-gradient-to-b from-white-300 to-white-500 w-full py-14" id="Services">
      <div className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
        <div className="flex flex-col w-full">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed"
            >
              Hizmetler
            </motion.h3>
            <motion.p
              variants={scrollAnimation}
              className="leading-normal w-10/12 sm:w-7/12 lg:w-6/12 mx-auto my-2 text-center"
            >
              Sunmuş olduğumuz hizmetleri inceleyebilirsiniz
            </motion.p>
          </ScrollAnimationWrapper>

          <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-12 py-8 lg:py-12 px-6 sm:px-0 lg:px-6">
            {plans.map((plan, index) => (
              <ScrollAnimationWrapper className="flex justify-center" key={index}>
                <motion.div
                  variants={scrollAnimation}
                  className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-16 cursor-pointer"
                >
                  <div className="p-4 lg:p-0 mt-6">
                    <picture>
                      <img
                        src={plan.image}
                        alt={plan.name}
                        height={'100'}
                        width={'100'}
                      />
                    </picture>
                  </div>
                  <p className="text-lg text-black-600 font-medium capitalize my-2 sm:my-4">
                    {plan.name}
                  </p>
                  <ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="relative check custom-list my-2">
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-col w-full justify-center mb-7 flex-none mt-5 lg:mt-12">
                    <Button href={plan.href}>Detay</Button>
                  </div>
                </motion.div>
              </ScrollAnimationWrapper>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
