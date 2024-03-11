import { navbarItems } from "@/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import myLogo from "../assets/my_logo.png";

const Navbar = () => {
	return (
		<nav className="z-20 fixed top-0 bg-light_gray_color flex justify-center items-center sm:justify-between w-full py-2 px-8">
			<Link href="./">
				{" "}
				<Image
					src={myLogo}
					width={100}
					alt="logo"
				/>
			</Link>
			<div className="hidden sm:flex justify-end items-center">
				{navbarItems.map((item) => (
					<div
						key={item.id}
						className="cursor-pointer font-medium text-[1.1rem] text-brown_color hover:bg-brown_color hover:text-light_gray_color transition-all rounded-full py-1 px-4"
					>
						<Link href={item.link}>{item.title}</Link>
					</div>
				))}
			</div>
		</nav>
	);
};

export default Navbar;
