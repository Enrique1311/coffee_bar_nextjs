import Image from "next/image";
import React from "react";
import { dataAboutUs } from "@/data";

const AboutUsItem = () => {
	return (
		<div className="flex flex-col justify-center items-center gap-8 mt-4 md:mt-0">
			{dataAboutUs.map((item) => (
				<div
					key={item.id}
					className="bg-light_gray_color_2 flex flex-col justify-center items-center gap-6 sm:gap-10 md:gap-12 rounded-2xl py-8 px-6 sm:p-10 md:p-12 md:flex-row"
				>
					<div className="md:w-2/3">
						<h3 className="text-brown_color text-center text-2xl font-semibold mb-3">
							{item.title}
						</h3>
						<p className="text-gray_color font-semibold text-lg">{item.text}</p>
					</div>
					<Image
						src={item.itemImage}
						alt={item.title}
						className="w-full md:w-1/3"
					/>
				</div>
			))}
		</div>
	);
};

export default AboutUsItem;
