import Link from "next/link";
import React from "react";
import { PiArrowFatLineUp } from "react-icons/pi";

const TopButton = () => {
	return (
		<div className="fixed bottom-24 right-2 sm:bottom-4 z-50 bg-orange_color py-2 px-1 rounded-full text-2xl text-light_gray_color">
			<Link href="#home">
				{" "}
				<PiArrowFatLineUp />
			</Link>
		</div>
	);
};

export default TopButton;
