import { Urbanist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import MobileNavbar from "@/components/MobileNavbar";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata = {
	title: "The Coffee House",
	description: "",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={urbanist.className}>
				<Navbar />
				<MobileNavbar />
				{children}
			</body>
		</html>
	);
}
