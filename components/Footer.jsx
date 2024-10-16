import React from "react";
import Title from "./Title";
import SocialMedia from "./SocialMedia";
import Image from "next/image";
import my_logo from "@/assets/images/my_logo.png";

const Footer = () => {
	return (
		<footer
			className="section_padding mt-12 pb-16 sm:pb-2 bg-bg_color"
			id="contact"
		>
			<div className="pb-16 flex flex-col justify-center items-center gap-8 md:flex-row lg:gap-20">
				{" "}
				<div className="text-brown_color">
					<h2 className="text-2xl font-extrabold text-orange_color">
						Contact Us
					</h2>
					<p className="font-semibold my-8">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
						dolore nostrum ex id quisquam reiciendis est error, a quos excepturi
						expedita, explicabo ipsum quasi consequuntur similique enim ipsam
						voluptatem eveniet.
					</p>{" "}
					<SocialMedia />
				</div>{" "}
				<div>
					<Image
						src={my_logo}
						alt="logo"
						className="max-w-[20rem]"
					/>
					<div className="text-center text-brown_color font-medium mt-4">
						{" "}
						<p>Costa Rica 2900 - CABA</p>
						<p>Tel: 11 568-9944</p>
					</div>
				</div>
			</div>{" "}
			<div className="p-1 text-sm text-brown_color text-center border-t-[1px] border-brown_color">
				<p>2024 - All rights reserved</p>
			</div>
		</footer>
	);
};

export default Footer;
