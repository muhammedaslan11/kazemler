import React, { useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const Newsletter = () => {
    const scrollAnimation = useMemo(() => getScrollAnimation(), []);

    return (
        <ScrollAnimationWrapper className="relative max-w-6xl mt-16">
            <motion.div variants={scrollAnimation} custom={{ duration: 3 }}>
                <div className="absolute rounded-xl py-8 sm:py-14 px-6 sm:px-12 lg:px-16 w-full flex flex-col sm:flex-row justify-between items-center z-100 bg-black border">
                    <div className="flex flex-col text-left w-10/12 sm:w-7/12 lg:w-5/12 mb-6 sm:mb-0">
                        <h5 className="text-xl sm:text-2xl lg:text-3xl leading-relaxed font-medium">
                            Şimdi Abone Olun <br /> Özel Avantajlar Kazanın!
                        </h5>
                        <p>Bizimle abone olun, fırsatların keyfini çıkarın.</p>
                    </div>
                    <div className="mt-4 flex gap-3 items-center">
                        <input
                            type="email"
                            placeholder="E-posta adresinizi girin"
                            className="px-4 py-3 rounded-lg border focus:outline-none w-full sm:w-auto sm:min-w-[280px] text-sm"
                        />
                        <button className="p-3 cursor-pointer text-black font-semibold rounded-lg bg-white hover:bg-gray-200 hover:shadow-lg">
                            Abone Ol
                        </button>
                    </div>
                </div>
                <div
                    className="absolute bg-black opacity-5 w-11/12 rounded-lg h-60 sm:h-56 top-0 mt-8 mx-auto left-0 right-0"
                    style={{ filter: "blur(114px)" }}
                ></div>
            </motion.div>
        </ScrollAnimationWrapper>
    );
};

export default Newsletter;
