// import { Paths } from "@/data/Paths";
import Link from "next/link";
import Navbar from "./Navbar";


const Header = () => {
    return (
        <div className="w-full bg-[var(--secondary)]">
            <div className="flex items-center justify-between w-full max-w-[var(--desktop)] mx-auto p-sm">
                
                {/* logo */}
                <Link href="/">
                    <h1 className="text-lg font-bold">NANA <span className="font-light">MARBLE</span></h1>
                </Link>

                <Navbar />
            </div>
        </div>
    )
}

export default Header;