import React, { useMemo } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import Button from "./common/Button";

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
                            Huge Global Network
                        </motion.h3>
                        <motion.p
                            className="leading-normal mx-auto my-2 w-10/12 sm:w-7/12 lg:w-6/12"
                            variants={scrollAnimation}
                        >
                            See KAZEMLER everywhere to make it easier for you when you move locations.
                        </motion.p>
                    </ScrollAnimationWrapper>

                    <ScrollAnimationWrapper>
                        <motion.div className="py-12 w-full px-8 mt-16" variants={scrollAnimation}>
                            <picture>
                                <img
                                    src="/images/HugeGlobal.svg"
                                    alt="Illustration"
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
                                <img src="/images/glomil_white.png" className="h-14 w-auto mt-2 lg:mt-0" alt="Netflix" />
                            </picture>
                            <picture>
                                <img src="/images/barcode_white.png" className="h-12 w-auto mt-2 lg:mt-0" alt="Reddit" />
                            </picture>
                            <picture>
                                <img src="/images/jolib_white.png" className="h-14 w-auto mt-2 lg:mt-0" alt="Discord" />
                            </picture>
                            <picture>
                                <img src="/images/level3_white.svg" className="h-14 w-auto mt-4 lg:mt-2" alt="Amazon" />
                            </picture>

                        </motion.div>
                    </ScrollAnimationWrapper>

                    <ScrollAnimationWrapper className="relative w-full mt-16">
                        <motion.div variants={scrollAnimation} custom={{ duration: 3 }}>
                            <div className="absolute rounded-xl py-8 sm:py-14 px-6 sm:px-12 lg:px-16 w-full flex flex-col sm:flex-row justify-between items-center z-10 bg-white-500 border bg-neutral-900">
                                <div className="flex flex-col text-left w-10/12 sm:w-7/12 lg:w-5/12 mb-6 sm:mb-0">
                                    <h5 className="text-black-600 text-xl sm:text-2xl lg:text-3xl leading-relaxed font-medium">
                                        Subscribe Now for <br /> Get Special Features!
                                    </h5>
                                    <p>Let's subscribe with us and find the fun.</p>
                                </div>
                                <Button href='/contact'>Get Started</Button>
                            </div>
                            <div
                                className="absolute bg-black-600 opacity-5 w-11/12 rounded-lg h-60 sm:h-56 top-0 mt-8 mx-auto left-0 right-0"
                                style={{ filter: "blur(114px)" }}
                            ></div>
                        </motion.div>
                    </ScrollAnimationWrapper>
                </div>
            </div>
        </div>
    );
};

export default Map;
