import AboutUs from "@/components/AboutUs";
import Gallery from "@/components/Gallery";
import Intro from "@/components/Intro";
import OurMenu from "@/components/OurMenu";

export default function Home() {
	return (
		<main className="pb-20 pt-10">
			<Intro />
			<AboutUs />
			<OurMenu />
			<Gallery />
		</main>
	);
}
