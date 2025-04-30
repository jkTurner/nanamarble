import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { seoData } from "@/data/SeoData";
import localFont from "next/font/local";

const inter = Inter({ subsets: ['latin'] });

const aktiv = localFont({
	src: '../fonts/Aktiv_Grotesk_Thai.otf',
	weight: '400',
	style: 'normal',
	variable: '--font-aktiv',
  })

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

		<html lang="th" className={`${inter.className} ${aktiv.variable} antialiased`}>
			{/* <body className={`${inter.className} antialiased`}> */}
			<body>
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
