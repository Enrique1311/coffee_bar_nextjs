import { navbarItems } from "@/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import myLogo from "../assets/my_logo.png";

const Navbar = () => {
	return (
		<nav className="fixed z-2 bg-gray-200 flex justify-center items-center sm:justify-between w-full py-2 px-8">
			<Link href="./">
				{" "}
				<Image
					src={myLogo}
					width={120}
					alt="logo"
				/>
			</Link>
			<div className="hidden sm:flex justify-end items-center">
				{navbarItems.map((item) => (
					<div
						key={item.id}
						className="cursor-pointer font-medium text-[1.1rem] text-orange-900 hover:bg-orange-900 hover:text-gray-200 transition-all rounded-full py-1 px-4"
					>
						<Link href={item.link}>{item.title}</Link>
					</div>
				))}
			</div>
		</nav>
	);
};

export default Navbar;
