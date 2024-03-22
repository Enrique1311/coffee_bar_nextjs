"use client";
import React from "react";

const MainButton = ({ children, onClick }) => {
	return (
		<button
			className="flex justify-center items-center bg-orange_color py-1 px-4 my-1 border-2 border-orange_color text-white text-lg font-semibold rounded-full hover:bg-transparent hover:text-orange_color"
			onClick={onClick}
		>
			{children}
		</button>
	);
};

export default MainButton;
