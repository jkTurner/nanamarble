import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: "NANA MARBLE",
	description: "welcome!",
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
