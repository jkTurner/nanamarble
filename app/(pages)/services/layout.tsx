import { seoData } from "@/data/SeoData";
import { Metadata } from "next";
import { ReactNode } from "react";


export const metadata: Metadata = {
    title: seoData.servicesTitle,
    description: seoData.servicesDescription,
    openGraph: {
        title: "Marble Supply & Installation Services | Nana Marble Thailand",
        description: "Explore expert marble services from Nana Marble in Chiang Mai: slab sourcing, custom cutting, polishing, and professional installation across Thailand.",
        url: "https://www.nanamarble.com/services",
        type: "website",
        images: [
            {
                url: "https://www.nanamarble.com/images/services-cover.jpg",
                width: 1200,
                height: 630,
                alt: "Modern marble kitchen and polished surfaces",
            }
        ]
    }
}

interface ServicesLayoutProps {
    children: ReactNode;
}

const ServicesLayout: React.FC<ServicesLayoutProps> = ({ children }) => {
    return (
        <div className="w-full">
            {children}
        </div>
    )
}

export default ServicesLayout;