/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				orange_color: "#fb8005",
				brown_color: "#7e3302",
				gray_color: "#626161",
				light_gray_color: "#e9e9eb",
				light_gray_color_2: "#f2f3f4",
			},
		},
	},
	plugins: [],
};
