import Image from "next/image";
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const features = [
  "Stratejik iş danışmanlığı",
  "Özel üretim çözümleri",
  "İthalat ve ihracat operasyonları",
  "Pazar araştırması ve analiz hizmetleri",
];

const Feature = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className="max-w-screen-xl mt-8 mb-12 sm:mt-14 sm:mb-16 px-6 sm:px-8 lg:px-16 mx-auto text-white"
      id="feature"
    >
      <div className="flex flex-col items-center py-12 sm:py-16 space-y-10">
        <ScrollAnimationWrapper>
          <motion.div className="w-full flex justify-center" variants={scrollAnimation}>
            <picture>
              <img
                src="/images/kazemler_logo.png"
                alt="Kazemler"
                style={{ width: "300px", height: "auto" }}
              />
            </picture>
          </motion.div>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper>
          <motion.div
            className="flex flex-col items-center text-center w-full max-w-3xl"
            variants={scrollAnimation}
          >
            <h3 className="text-4xl lg:text-5xl font-semibold leading-relaxed text-white mb-4">
              Size Sunabileceğimiz Birçok Özelliğimiz Var
            </h3>
            <p className="text-lg sm:text-xl text-gray-400 mb-8">
              İhtiyaçlarınıza özel güçlü çözümlerle işinizi büyütebileceğiniz özelliklerimizi keşfedin.
            </p>
            <ul className="text-gray-300 list-inside space-y-4 text-left">
              {features.map((feature, index) => (
                <motion.li
                  className="relative text-lg font-medium"
                  custom={{ duration: 2 + index }}
                  variants={scrollAnimation}
                  key={feature}
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.3 },
                  }}
                >
                  <span className="text-orange-400 mr-2">•</span>
                  {feature}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </ScrollAnimationWrapper>
      </div>
    </div>
  );
};

export default Feature;
