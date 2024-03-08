import { dataSocialMedia } from "@/data";

import Link from "next/link";
import React from "react";

const SocialMedia = () => {
	return (
		<div className="flex justify-center items-center p-4">
			<div className="flex w-fit justify-around items-center gap-4 bg-gray-200 py-1 px-6 rounded-full">
				{dataSocialMedia.map((socialMedia) => (
					<Link
						key={socialMedia.id}
						href={socialMedia.link}
						className="p-1 hover:bg-orange-900 hover:text-gray-200 rounded-full transition-all"
					>
						{socialMedia.icon}
					</Link>
				))}
			</div>
		</div>
	);
};

export default SocialMedia;
