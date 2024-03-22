import React from "react";
import Title from "./Title";
import AboutUsItem from "./AboutUsItem";
import leaves_grain from "@/assets/leaves_grain.png";

const AboutUs = () => {
	return (
		<section
			id="about-us"
			className="section_padding"
		>
			<Title
				title="About Us"
				subtitle="Top quality coffee and pasties"
				itemImage={leaves_grain}
			/>
			<AboutUsItem />
		</section>
	);
};

export default AboutUs;
