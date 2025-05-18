import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import Navbar from "@/components/navbar";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Vinh Nguyen | Frontend Engineer Portfolio",
	description:
		"Portfolio of Vinh Nguyen, a Frontend Engineer based in Vietnam. Showcasing projects, skills, and contact information.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<Head>
				<title>Vinh Nguyen | Frontend Engineer Portfolio</title>
				<meta
					name="description"
					content="Portfolio of Vinh Nguyen, a Frontend Engineer based in Vietnam. Showcasing projects, skills, and contact information."
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<body
				className={`mx-auto bg-[#202023] ${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<header className="fixed w-full p-2 z-20 backdrop-blur-md">
					<Navbar />
				</header>
				<main>{children}</main>
			</body>
		</html>
	);
}
