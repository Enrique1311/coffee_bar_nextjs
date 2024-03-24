import React from "react";
import Title from "./Title";
import breackfast from "@/assets/images/breackfast.png";
import Image from "next/image";
import menu_coffee from "@/assets/images/menu_coffee.png";
import { GiCoffeeCup } from "react-icons/gi";
import { GiManualJuicer } from "react-icons/gi";
import { LuDessert } from "react-icons/lu";
import { MdOutlineBakeryDining } from "react-icons/md";
import { GiSandwich } from "react-icons/gi";
import { LuCupSoda } from "react-icons/lu";
import MainButton from "./MainButton";

const OurMenu = () => {
	return (
		<section
			id="menu"
			className="section_padding"
		>
			<Title
				title="Our Menu"
				subtitle="Know our delicious"
				itemImage={breackfast}
			/>
			<div className="flex flex-col justify-center items-center w-full p-12 border border-light_gray_color rounded-2xl gap-6 md:flex-row">
				<div className="w-full md:w-1/2">
					<p className="details-p mb-6">
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius totam
						voluptates possimus, aliquam voluptatibus ullam, debitis dignissimos
						quam soluta neque nemo illum, quisquam mollitia consequatur quo
						accusamus fugiat quae nulla?. Lorem ipsum dolor sit amet,
						consectetur adipisicing elit. Expedita officiis iste sed est
						similique quaerat totam, corporis autem doloribus voluptates dolorum
						illum eius dolor sequi a vero quia quibusdam voluptatem. Lorem ipsum
						dolor sit amet consectetur adipisicing elit.
					</p>
					<MainButton>Show Menu</MainButton>
				</div>
				<div className="relative w-full md:w-1/2">
					{" "}
					<Image
						src={menu_coffee}
						alt="coffee"
						className="w-[80%]"
					/>{" "}
					<div className="absolute top-0 right-0 h-full flex flex-col justify-around items-start py-6">
						<div className="our-menu-item">
							<GiCoffeeCup /> <h4>Coffees</h4>
						</div>
						<div className="our-menu-item">
							<GiManualJuicer /> <h4>Smoothies</h4>
						</div>{" "}
						<div className="our-menu-item">
							<MdOutlineBakeryDining />
							<h4>Bakery</h4>
						</div>
						<div className="our-menu-item">
							<LuDessert /> <h4>Pastries</h4>
						</div>{" "}
						<div className="our-menu-item">
							<GiSandwich />
							<h4>Sandwiches</h4>
						</div>
						<div className="our-menu-item">
							<LuCupSoda />
							<h4>Drinks</h4>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default OurMenu;
