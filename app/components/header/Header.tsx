"use client"

import Link from "next/link";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";
import MobileMenu from "./MobileMenu";
import { HamburgerIcon } from "@/assets/Icons";

const Header = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    const toggleMenu = () => {
        setIsMenuOpen(state => !state);
    }

    useEffect(() => {

        const handleResize = () => {
            if (window.innerWidth >= 768 && isMenuOpen) {
                setIsMenuOpen(false);
            }
        }

        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize);
    }, [isMenuOpen]);



    return (
        <div className="w-full bg-[var(--secondary)]">
            <div className="flex h-[80px] items-center justify-between w-full max-w-[var(--desktop)] mx-auto px-sm border-b-[var(--accent)] border-b-3 md:border-0">
                
                {/* logo */}
                <Link href="/">
                    <h1 className="text-lg font-bold">NANA <span className="font-light">MARBLE</span></h1>
                </Link>

                <div className="hidden md:flex items-center">
                    <Navbar />
                </div>

                <button onClick={toggleMenu} className="md:hidden cursor-pointer px-sm">
                    <HamburgerIcon size={32} />
                </button>

                <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

            </div>
        </div>
    )
}

export default Header;