import React, { useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import Button from "./common/Button";
import { Icon } from "./common/Icon";

const Hero = ({
  listUser = [
    {
      name: "Müşteri",
      number: "111",
      icon: "users",
    },
    {
      name: "Lokasyon",
      number: "11",
      icon: "location",
    },
    {
      name: "Yıl",
      number: "8",
      icon: "calendar",
    },
  ],
}) => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <React.Fragment>
      <div className="w-full h-screen overflow-hidden" id="about">
        <img
          src="/images/export_banner.jpg"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="bg-black py-16 text-white text-center">
        <ScrollAnimationWrapper>
          <motion.div
            className="max-w-screen-xl mx-auto px-4"
            variants={scrollAnimation}
          >
            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold leading-snug">
              İHRACAT & İTHALATIN <br />
              <strong className="text-white">DOĞRU YOLU</strong>
            </h1>
            <div className="mt-6">
              <Button href="/iletisim" type="primary">Başlayalım</Button>
            </div>
          </motion.div>
        </ScrollAnimationWrapper>
      </div>

      <div className="relative z-20 mt-4">
        <ScrollAnimationWrapper className="rounded-lg w-full grid grid-cols-1 sm:grid-cols-3 py-9 divide-y-2 sm:divide-y-0 sm:divide-x-2 divide-gray-100 z-10 max-w-screen-xl mx-auto">
          {listUser.map((item, index) => (
            <motion.div
              key={index}
              className="flex items-center justify-center py-6"
              custom={{ duration: 2 + index }}
              variants={scrollAnimation}
            >
              <div className="flex items-center">
                <div className="flex items-center justify-center w-16 h-16 mr-6 rounded-lg border bg-black-600">
                  <Icon iconName={item.icon} size={27} color="#fff" />
                </div>
                <div className="flex flex-col">
                  <p className="text-xl font-bold text-black-600">{item.number}+</p>
                  <p className="text-lg text-black-500">{item.name}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </ScrollAnimationWrapper>
      </div>
    </React.Fragment>
  );
};

export default Hero;
