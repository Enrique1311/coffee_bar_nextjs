import Image from "next/image";
import React from "react";
import cup_of_coffee from "@/assets/cup_of_coffee.png";
import SocialMedia from "./SocialMedia";

const Intro = () => {
	return (
		<section className="section_padding flex flex-col justify-center items-center gap-4 md:flex-row">
			{" "}
			<div className="flex flex-col justify-center text-center gap-4 text-brown_color w-full md:w-1/2">
				{" "}
				<h1 className="text-3xl lg:text-5xl font-extrabold">
					Indulge in a <br /> symphony of flavors
					<br /> at
					<span className="text-orange_color"> The Coffee House</span>
				</h1>
				<h3 className="text-xl font-semibold">
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
		</section>
	);
};

export default Intro;
