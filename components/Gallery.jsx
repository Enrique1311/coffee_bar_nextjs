"use client";
import React, { useState } from "react";
import { dataGallery } from "@/data";
import Image from "next/image";
import Title from "./Title";
import heart from "@/assets/heart.png";
import {
	IoIosArrowBack,
	IoIosArrowForward,
	IoLogoInstagram,
} from "react-icons/io";
import { GoDotFill } from "react-icons/go";
import Link from "next/link";

const Gallery = () => {
	const [slideIndex, setSlideIndex] = useState(0);

	const prevImage = () => {
		const firstIndex = slideIndex === 0;
		const newIndex = firstIndex ? dataGallery.length - 1 : slideIndex - 1;
		setSlideIndex(newIndex);
	};

	const nextImage = () => {
		const lastIndex = slideIndex === dataGallery.length - 1;
		const newIndex = lastIndex ? 0 : slideIndex + 1;
		setSlideIndex(newIndex);
	};

	const slideDots = (slideIndex) => {
		setSlideIndex(slideIndex);
	};

	return (
		<section
			id="gallery"
			className="section_padding w-full my-5"
		>
			<Title
				title="Gallery"
				subtitle="Find us in Instagram"
				itemImage={heart}
			/>
			<div className="flex flex-col justify-center items-center">
				{" "}
				<div className="overflow-hidden flex justify-between items-center rounded-2xl w-full relative group">
					{" "}
					<Image
						src={dataGallery[slideIndex].slider_image}
						alt="slider_image"
						className="object-cover h-[480px] sm:h-[600px] duration-1000"
					/>
					<div className="flex justify-between items-center absolute w-full px-4">
						<div className="rounded-full group-hover:opacity-100 bg-light_gray_color text-4xl text-brown_color cursor-pointer opacity-30 transition">
							<IoIosArrowBack onClick={prevImage} />
						</div>
						<Link
							href="#/"
							className="group-hover:opacity-100 text-light_gray_color text-6xl cursor-pointer opacity-30 transition hover:scale-125"
						>
							<IoLogoInstagram />
						</Link>
						<div className="rounded-full group-hover:opacity-100 bg-light_gray_color text-4xl text-brown_color cursor-pointer opacity-30 transition">
							<IoIosArrowForward onClick={nextImage} />
						</div>
					</div>
				</div>
				<div className="flex justify-center items-center gap-2 mt-2">
					{dataGallery.map((item, itemIndex) => (
						<div
							key={itemIndex}
							onClick={() => slideDots(itemIndex)}
							className="cursor-pointer text-brown_color"
						>
							<GoDotFill />
						</div>
					))}
				</div>
			</div>{" "}
		</section>
	);
};

export default Gallery;
