import React from "react";
import { navbarItems } from "@/data";
import Link from "next/link";

const MobileNavbar = () => {
	return (
		<div className="fixed z-20 flex justify-center items-center sm:hidden w-full p-2 bottom-0">
			<nav className="w-full bg-gray-300 rounded-full flex justify-around items-center p-2">
				{navbarItems.map((item) => (
					<div
						key={item.id}
						className="py-2 px-4 text-orange-950"
					>
						<Link href={item.link}>{item.icon}</Link>
					</div>
				))}
			</nav>
		</div>
	);
};

export default MobileNavbar;
