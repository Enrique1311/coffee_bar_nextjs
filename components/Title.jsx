import Image from "next/image";
import React from "react";
import leaves_grain from "../assets/leaves_grain.png";

const Title = ({ title, subtitle, side_image }) => {
	return (
		<div className="flex justify-center items-center gap-4 w-full mb-6">
			<Image
				src={leaves_grain}
				alt="coffee"
				className="w-20 sm:w-24 md:w-28"
			/>
			<div className="flex flex-col justify-center items-center">
				<h2 className="text-orange_color text-2xl font-semibold">{title}</h2>
				<h3 className="text-brown_color text-xl font-bold text-center">
					{subtitle}
				</h3>{" "}
			</div>
			<Image
				src={leaves_grain}
				alt="coffee"
				className="w-20 sm:w-24 md:w-28"
			/>
		</div>
	);
};

export default Title;
