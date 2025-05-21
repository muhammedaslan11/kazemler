import React, { useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import Newsletter from "./Newsletter";

const Map = () => {
    const scrollAnimation = useMemo(() => getScrollAnimation(), []);

    return (
        <div
            className="bg-gradient-to-b from-white-300 to-white-500 w-full py-14"
            id="map"
        >
            <div className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
                <div className="flex flex-col w-full my-16">
                    <ScrollAnimationWrapper>
                        <motion.h3
                            variants={scrollAnimation}
                            className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed w-9/12 sm:w-6/12 lg:w-4/12 mx-auto"
                        >
                            Geniş Küresel Ağ
                        </motion.h3>
                        <motion.p
                            className="leading-normal mx-auto my-2 w-10/12 sm:w-7/12 lg:w-6/12"
                            variants={scrollAnimation}
                        >
                            Taşındığınızda işinizi kolaylaştırmak için KAZEMLER’i her yerde görebilirsiniz.
                        </motion.p>
                    </ScrollAnimationWrapper>

                    <ScrollAnimationWrapper>
                        <motion.div className="py-12 w-full px-8 mt-16" variants={scrollAnimation}>
                            <picture>
                                <img
                                    src="/images/HugeGlobal.svg"
                                    alt="İllüstrasyon"
                                    width="612"
                                    height="383"
                                    style={{ width: "100%", height: "auto" }}
                                />
                            </picture>
                        </motion.div>
                    </ScrollAnimationWrapper>

                    <ScrollAnimationWrapper>
                        <motion.div
                            className="w-full flex justify-evenly items-center mt-4 flex-wrap lg:flex-nowrap"
                            variants={scrollAnimation}
                        >
                            <picture>
                                <img src="/images/barcode_white.png" className="h-12 w-auto mt-2 lg:mt-0" alt="Barcode" />
                            </picture>
                            <picture>
                                <img src="/images/glomil_white.png" className="h-14 w-auto mt-2 lg:mt-0" alt="Glomil" />
                            </picture>
                            <picture>
                                <img src="/images/jolib_white.png" className="h-14 w-auto mt-2 lg:mt-0" alt="Jolib" />
                            </picture>
                        </motion.div>
                    </ScrollAnimationWrapper>

                    <Newsletter />
                </div>
            </div>
        </div>
    );
};

export default Map;
