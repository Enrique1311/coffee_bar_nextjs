import React from "react";
import Title from "./Title";
import AboutUsItem from "./AboutUsItem";

const AboutUs = () => {
	return (
		<section
			id="about-us"
			className="section_padding"
		>
			<Title
				title="About Us"
				subtitle="Top quality coffee and pasties"
			/>
			<AboutUsItem />
		</section>
	);
};

export default AboutUs;
