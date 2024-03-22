"use client";
import Image from "next/image";
import React from "react";
import { dataAboutUs } from "@/data";
import MainButton from "./MainButton";

const AboutUsItem = () => {
	return (
		<div className="flex flex-col justify-center items-center gap-8 mt-4 md:mt-0">
			{dataAboutUs.map((item) => (
				<div
					key={item.id}
					className="bg-light_gray_color_2 flex flex-col justify-center items-center gap-6 sm:gap-10 md:gap-12 rounded-2xl py-8 px-8 sm:px-10 md:px-14 md:flex-row"
				>
					<div className="flex flex-col justify-center items-start gap-3 md:w-3/5 lg:w-2/3">
						<h3 className="text-brown_color text-2xl font-semibold">
							{item.title}
						</h3>
						<p className="text-gray_color font-semibold text-base">
							{item.text}
						</p>
						<MainButton>Know more</MainButton>
					</div>
					<Image
						src={item.itemImage}
						alt={item.title}
						className="w-full md:w-2/5 lg:w-1/3"
					/>
				</div>
			))}
		</div>
	);
};

export default AboutUsItem;
