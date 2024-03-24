import { dataSocialMedia } from "@/assets/data";
import Link from "next/link";
import React from "react";

const SocialMedia = () => {
	return (
		<div className="w-full flex justify-center items-center md:justify-start">
			<div className="flex w-fit justify-around items-center gap-4 bg-light_gray_color py-1 px-6 rounded-full my-4">
				{dataSocialMedia.map((socialMedia) => (
					<Link
						key={socialMedia.id}
						href={socialMedia.link}
						className="p-1 hover:bg-brown_color hover:text-light_gray_color rounded-full transition-all"
					>
						{socialMedia.icon}
					</Link>
				))}
			</div>
		</div>
	);
};

export default SocialMedia;
