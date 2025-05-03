import Image from "next/image";
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const features = [
  "Strategic business consulting",
  "Custom manufacturing solutions",
  "Import & export operations",
  "Market research and analysis services",
];

const Feature = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className="max-w-screen-xl mt-8 mb-12 sm:mt-14 sm:mb-16 px-6 sm:px-8 lg:px-16 mx-auto text-white"
      id="feature"
    >
      <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8 py-12 sm:py-16 my-12">
        <ScrollAnimationWrapper className="flex w-full justify-center sm:justify-end">
          <motion.div className="h-full w-full p-4" variants={scrollAnimation}>
            <picture>
              <img
                src="/images/Illustration2.png"
                alt="Feature Illustration"
                width="508"
                height="414"
                style={{ width: "100%", height: "auto" }}
              />
            </picture>

          </motion.div>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper>
          <motion.div
            className="flex flex-col items-start sm:items-end justify-center ml-auto w-full lg:w-9/12"
            variants={scrollAnimation}
          >
            <h3 className="text-4xl lg:text-5xl font-semibold leading-relaxed text-white mb-4">
              We Provide Many Features You Can Use
            </h3>
            <p className="text-lg sm:text-xl text-gray-400 mb-8">
              Explore our features to boost your business with powerful solutions tailored to your needs.
            </p>
            <ul className="text-gray-300 self-start list-inside ml-8 space-y-4">
              {features.map((feature, index) => (
                <motion.li
                  className="relative circle-check custom-list text-lg font-medium"
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
