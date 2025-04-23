import { contactData } from "@/data/SiteData";
import Navbar from "../header/Navbar";
import Subscribe from "./Subscribe";


const Footer = () => {
    return (
        <div className="bg-[var(--primary)] w-full md:h-[400px] text-[var(--secondary)]">

            {/* inner container */}
            <div className="flex flex-col md:flex-row gap-sm justify-between md:items-center w-full h-full max-w-[var(--desktop)] mx-auto p-sm py-xl">
                
                {/* contact info */}
                <div className="flex flex-col gap-sm max-w-[50%]">
                    <h4 className="text-md font-semibold">NANA MARBLE</h4>

                    <div>
                        <h4>{contactData.businessName}</h4>
                        <span className="font-light text-xs">{contactData.address}</span>
                    </div>

                    <div>
                        <h4 className="font-light text-xs">{contactData.phoneNumber}</h4>
                        <span className="font-light text-xs">{contactData.workHours}</span>
                    </div>
                </div>

                {/* subscribe */}
                <Subscribe />

            </div>

            {/* bottom nav */}
            <div className="w-full bg-accent md:h-3xl text-[var(--primary)]">

                <div className="flex flex-col md:flex-row items-center justify-between px-sm py-sm gap-sm w-full max-w-[var(--desktop)] h-full mx-auto">
                    <Navbar />
                    <div className="flex flex-col text-xs font-light md:items-end items-center">
                        <span>© Nana Marble Inc. All rights reserved</span>
                        <span className="text-xs">By JK Turner Fullstack</span>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Footer;