import React from "react";
import { navbarItems } from "@/data";
import Link from "next/link";

const MobileNavbar = () => {
	return (
		<div className="fixed z-20 flex justify-center items-center sm:hidden w-full p-2 bottom-0">
			<nav className="basic-shadow w-full bg-light_gray_color rounded-full flex justify-around items-center px-2 pt-1">
				{navbarItems.map((item) => (
					<div
						key={item.id}
						className="p-1 text-brown_color"
					>
						<Link
							href={item.link}
							className="flex flex-col justify-center items-center text-xs"
						>
							{item.icon}
							{item.title}
						</Link>
					</div>
				))}
			</nav>
		</div>
	);
};

export default MobileNavbar;
