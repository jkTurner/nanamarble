import { seoData } from "@/data/SeoData";
import { Metadata } from "next";
import { ReactNode } from "react";


export const metadata: Metadata = {
    title: seoData.contactTitle,
    description: seoData.contactTitle,
    openGraph: {
        title: seoData.contactTitle,
        description: seoData.contactDescription,
        url: "https://www.nanamarble.com/contact",
        type: "website",
        images: [
            {
                url: "",
                width: 1200,
                height: 630,
                alt: ""
            }
        ]
        
    }
}

interface ContactLayoutProps {
    children: ReactNode;
}

const ContactLayout: React.FC<ContactLayoutProps> = ({ children }) => {
    return (
        <div className="w-full">
            {children}
        </div>
    )
}

export default ContactLayout;