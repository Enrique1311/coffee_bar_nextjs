import { FiBookOpen, FiHome, FiCoffee, FiFacebook } from "react-icons/fi";
import {
	MdOutlinePhotoLibrary,
	MdOutlineMessage,
	MdOutlineWhatsapp,
	MdOutlineEmail,
} from "react-icons/md";
import { FaInstagram } from "react-icons/fa";

import drinks from "@/assets/drinks.png";
import sweet from "@/assets/sweet.png";
import bread from "@/assets/bread.png";

import img1 from "@/assets/carrousel/img1.jpg";
import img2 from "@/assets/carrousel/img2.jpg";
import img3 from "@/assets/carrousel/img3.jpg";
import img4 from "@/assets/carrousel/img4.jpg";
import img5 from "@/assets/carrousel/img5.jpg";
import img6 from "@/assets/carrousel/img6.jpg";
import img7 from "@/assets/carrousel/img7.jpg";
import img8 from "@/assets/carrousel/img8.jpg";

export const dataSocialMedia = [
	{
		id: 1,
		title: "Instagram",
		subtitle: "@thecoffeehouse",
		link: "@thecoffeehouse",
		icon: <FaInstagram size={24} />,
	},
	{
		id: 2,
		title: "Facebook",
		subtitle: "@thecoffeehouse",
		link: "@thecoffeehouse",
		icon: <FiFacebook size={24} />,
	},
	{
		id: 3,
		title: "WhatsApp",
		subtitle: "+34 456 22 44 55",
		link: "github.com/ratasi",
		icon: <MdOutlineWhatsapp size={24} />,
	},
	{
		id: 4,
		title: "Email",
		subtitle: "email@email.com",
		link: "coffee:test@test.com",
		icon: <MdOutlineEmail size={24} />,
	},
];

export const navbarItems = [
	{
		id: 1,
		title: "Home",
		icon: <FiHome size={24} />,
		link: "#home",
	},
	{
		id: 2,
		title: "About",
		icon: <FiCoffee size={24} />,
		link: "#about-us",
	},
	{
		id: 3,
		title: "Menu",
		icon: <FiBookOpen size={24} />,
		link: "#menu",
	},
	{
		id: 4,
		title: "Gallery",
		icon: <MdOutlinePhotoLibrary size={24} />,
		link: "#gallery",
	},
	{
		id: 5,
		title: "Contact",
		icon: <MdOutlineMessage size={24} />,
		link: "#contact",
	},
];

export const dataGallery = [
	{
		id: 1,
		slider_image: img1,
	},
	{
		id: 2,
		slider_image: img2,
	},
	{
		id: 3,
		slider_image: img3,
	},
	{
		id: 4,
		slider_image: img4,
	},
	{
		id: 5,
		slider_image: img5,
	},
	{
		id: 6,
		slider_image: img6,
	},
	{
		id: 7,
		slider_image: img7,
	},
	{
		id: 8,
		slider_image: img8,
	},
];

export const dataAboutUs = [
	{
		id: 1,
		title: "Our coffees",
		text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit fugiat dolores rem distinctio quo? Perferendis, atque. Quasi deleniti aperiam quidem fugit, ipsa, neque laudantium itaque officia soluta incidunt, deserunt consequatur.",
		itemImage: drinks,
	},
	{
		id: 2,
		title: "Our sweets",
		text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit fugiat dolores rem distinctio quo? Perferendis, atque. Quasi deleniti aperiam quidem fugit, ipsa, neque laudantium itaque officia soluta incidunt, deserunt consequatur.",
		itemImage: sweet,
	},
	{
		id: 3,
		title: "Our breads",
		text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit fugiat dolores rem distinctio quo? Perferendis, atque. Quasi deleniti aperiam quidem fugit, ipsa, neque laudantium itaque officia soluta incidunt, deserunt consequatur.",
		itemImage: bread,
	},
];
