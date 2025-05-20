import React from "react";
import { useRouter } from "next/router";

const Button = ({ children, href, type = "outline", className = "" }) => {
    const router = useRouter();

    const baseClass =
        type === "primary"
            ? "py-3 lg:py-4 px-12 lg:px-16 text-black font-semibold rounded-lg bg-white hover:bg-gray-200 hover:shadow-lg"
            : "font-medium tracking-wide py-2 px-5 sm:px-8 border border-white text-white bg-transparent rounded-lg capitalize hover:bg-white hover:text-black hover:shadow-lg";

    return (
        <button
            className={`${baseClass} transition-all outline-none cursor-pointer ${className}`}
            onClick={() => href && router.push(`/${href}`)}
        >
            {children}
        </button>
    );
};

export default Button;
