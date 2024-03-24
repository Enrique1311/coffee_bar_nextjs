import Image from "next/image";
import React from "react";

const Title = ({ title, subtitle, itemImage }) => {
	return (
		<div className="flex justify-left items-center gap-4 w-full mb-6">
			<Image
				src={itemImage}
				alt="itemImage"
				className="w-20 sm:w-24 md:w-28"
			/>
			<div className="flex flex-col justify-start items-start">
				<h2 className="text-orange_color text-3xl font-semibold">{title}</h2>
				<h3 className="text-brown_color text-xl font-bold text-left">
					{subtitle}
				</h3>{" "}
			</div>
		</div>
	);
};

export default Title;
