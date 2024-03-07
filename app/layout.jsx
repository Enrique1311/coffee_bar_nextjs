import { Urbanist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import MobileNavbar from "@/components/MobileNavbar";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata = {
	title: "Mi Tierra Café",
	description: "Página web de Mi Tierra Café",
};

export default function RootLayout({ children }) {
	return (
		<html lang="es">
			<body className={urbanist.className}>
				<Navbar />
				<MobileNavbar />
				{children}
			</body>
		</html>
	);
}
