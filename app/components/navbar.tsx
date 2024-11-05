import { useState, useEffect } from "react";
import { menuModel } from "../models/menuModel";
import Link from "next/link";

export default function Navbar() {
    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const handleScroll = () => {
        if (typeof window !== 'undefined') {
            if (window.scrollY > lastScrollY) {
                setShowNavbar(false);
            } else {
                setShowNavbar(true);
            }
            setLastScrollY(window.scrollY);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [lastScrollY]);

    return (
        <div
            className={`fixed top-0 w-full flex justify-between px-14 py-4 shadow-md bg-white items-center transition-transform duration-300 ${showNavbar ? "transform translate-y-0" : "transform -translate-y-full"
                }`}
        >
            <img src="./images/companyLogo/company-logo-navbar.png" alt="logo-company" className="w-[200px]" />
            <div className="flex justify-between w-1/4">
                {menuModel.map((product, index) => (
                    product.link ? (
                        <Link key={index} href={`#${product.link}`} className="text-lg font-normal hover:text-primary hover:font-medium">
                            {product.label}
                        </Link>
                    ) : null
                ))}
            </div>
        </div>
    );
}
