import { navbarItems } from "@/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import myLogo from "../assets/my_logo.png";

const Navbar = () => {
	return (
		<div className="fixed z-2 bg-gray-300 flex justify-center items-center w-full py-2 px-12">
			<Link href="./">
				{" "}
				<Image
					src={myLogo}
					width={120}
					alt="logo"
				/>
			</Link>

			<nav className="w-full rounded-full hidden sm:flex justify-end items-center py-1 px-2">
				{navbarItems.map((item) => (
					<div
						key={item.id}
						className="cursor-pointer font-[2rem] text-orange-950 hover:bg-orange-950 hover:text-gray-300 rounded-full py-2 px-6 w-fill"
					>
						<Link href={item.link}>{item.title}</Link>
					</div>
				))}
			</nav>
		</div>
	);
};

export default Navbar;
