import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { seoData } from "@/data/SeoData";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: seoData.indexTitle,
	description: seoData.indexDescription,
	openGraph: {
		title: seoData.indexTitle,
		description: seoData.indexDescription,
		url: "http://www.nanamarble.com",
		type: "website",
		images: [
			{
				url: "",
				width: 1200,
				height: 630,
				alt: "",
			}
		]
	}
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
  return (

		<html lang="en">
			<body className={`${inter.className} antialiased`}>
				<div className="mainLayout">
					<Header />
					<div className="mainLayout min-h-[70vh]">
						{children}
					</div>
					<Footer />
				</div>
			</body>
		</html>

  	);
}
