import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Box } from "@mui/material";
import "./globals.css";
import { Barlow } from "next/font/google";

const barlow = Barlow({
	subsets: ["latin"],
	weight: ["400", "600", "800"],
	variable: "--font-barlow",
});

const ClientProviders = dynamic(
	() => import("@/app/_components/ClientProviders/ClientProviders"),
	{ ssr: false }
);

const Navbar = dynamic(() => import("./Navigation/NavBar"), { ssr: false });

export const metadata: Metadata = {
	title: "Karabast Beta",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={`${barlow.variable} font-sans`}>
			<body>
				<ClientProviders>
					<Box
						sx={{
							display: "flex",
							flexDirection: "column",
							height: "100vh",
							width: "100vw",
						}}
					>
						<Navbar />
						{children}
					</Box>
				</ClientProviders>
			</body>
		</html>
	);
}
