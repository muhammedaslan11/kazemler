import React, { useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import Button from "./common/Button";
import { Icon } from "./common/Icon";

const Hero = ({
  listUser = [
    {
      name: "Customers",
      number: "111",
      icon: "users",
    },
    {
      name: "Locations",
      number: "11",
      icon: "location",
    },
    {
      name: "Years",
      number: "8",
      icon: "calendar",
    },
  ],
}) => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div className="max-w-screen-xl mt-24 px-8 xl:px-16 mx-auto" id="about">
      <ScrollAnimationWrapper>
        <motion.div
          className="grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 py-6 sm:py-16"
          variants={scrollAnimation}
        >
          <div className="flex flex-col justify-center items-start row-start-2 sm:row-start-1">
            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-medium text-black-600 leading-normal">
              Make everything easier with <strong>KAZEMLER</strong>.
            </h1>
            <p className="text-black-500 mt-4 mb-6">
              We provide a seamless and enjoyable experience for all your needs.
              Explore unique features with KAZEMLER.
            </p>
            <Button type="primary">Get Started</Button>
          </div>
          <div className="flex w-full">
            <motion.div className="h-full w-full" variants={scrollAnimation}>
              <picture>
                <img
                  src="/images/Illustration1.png"
                  alt="Illustration"
                  width="612"
                  height="383"
                  style={{ width: "100%", height: "auto" }}
                />
              </picture>

            </motion.div>
          </div>
        </motion.div>
      </ScrollAnimationWrapper>

      <div className="relative w-full flex">
        <ScrollAnimationWrapper className="rounded-lg w-full grid grid-flow-row sm:grid-flow-row grid-cols-1 sm:grid-cols-3 py-9 divide-y-2 sm:divide-y-0 sm:divide-x-2 divide-gray-100 bg-white-500 z-10">
          {listUser.map((item, index) => (
            <motion.div
              key={index}
              className="flex items-center justify-start sm:justify-center py-4 sm:py-6 w-8/12 px-4 sm:w-auto mx-auto sm:mx-0"
              custom={{ duration: 2 + index }}
              variants={scrollAnimation}
            >
              <div className="flex mx-auto w-40 sm:w-auto">
                <div className="flex items-center justify-center w-16 h-16 mr-6 rounded-full border">
                  <Icon iconName={item.icon} size={27} color="#fff" />
                </div>
                <div className="flex flex-col">
                  <p className="text-xl text-black-600 font-bold">{item.number}+</p>
                  <p className="text-lg text-black-500">{item.name}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </ScrollAnimationWrapper>
        <div
          className="absolute bg-black-600 opacity-5 w-11/12 rounded-lg h-64 sm:h-48 top-0 mt-8 mx-auto left-0 right-0"
          style={{ filter: "blur(114px)" }}
        ></div>
      </div>
    </div>
  );
};

export default Hero;
