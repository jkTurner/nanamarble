import { seoData } from "@/data/SeoData";
import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
    title: seoData.aboutTitle,
    description: seoData.aboutDescription,
    openGraph: {
        title: seoData.aboutTitle,
        description: seoData.aboutDescription,
        url: "https://www.nanamarble.com/about",
        type: "website",
        images: [
            {
                url: "https://www.nanamarble.com/images/about-cover.jpg",
                width: 1200,
                height: 630,
                alt: "Marble showroom interior at Nana Marble",
            }
        ]
    }
}

interface AboutLayoutProps {
    children: ReactNode;
}

const AboutLayout: React.FC<AboutLayoutProps> = ({ children }) => {
    return (
        <div className="w-full">
            {children}
        </div>
    )
}

export default AboutLayout;

