"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import cup_of_coffee from "@/assets/images/cup_of_coffee.png";
import SocialMedia from "./SocialMedia";
import TopButton from "./TopButton";

const Intro = () => {
	const [showButton, setShowButton] = useState(false);
	const scrollRef = useRef();

	useEffect(() => {
		const handleScroll = () => {
			const headerDiv = scrollRef.current;
			const { y } = headerDiv.getBoundingClientRect();
			console.log(y);

			y <= -20 ? setShowButton(true) : setShowButton(false);
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<section
			id="home"
			className="section_padding flex flex-col justify-center items-center gap-4 md:flex-row bg-bg_color"
			ref={scrollRef}
		>
			{" "}
			<div className="flex flex-col justify-center gap-4 text-brown_color w-full md:w-1/2">
				{" "}
				<h1 className="text-4xl lg:text-4xl xl:text-5xl font-extrabold">
					Indulge in a <br /> symphony of flavors
					<br /> at
					<span className="text-orange_color"> The Coffee House</span>
				</h1>
				<h3 className="text-xl font-semibold mb-4">
					Immerse yourself in the aroma of freshly brewed coffee, crafted with
					passion. Experience a blend of warmth, community, and exceptional
					brews.
				</h3>
				<SocialMedia />
			</div>
			<div className="flex justify-center items-center w-4/5 md:w-1/2">
				<Image
					src={cup_of_coffee}
					alt="coffee-image"
					className="w-full"
				/>
			</div>
			{showButton && <TopButton />}
		</section>
	);
};

export default Intro;
