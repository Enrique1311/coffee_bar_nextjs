import AboutUs from "@/components/AboutUs";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Intro from "@/components/Intro";
import OurMenu from "@/components/OurMenu";

export default function Home() {
	return (
		<main className="pt-10">
			<Intro />
			<AboutUs />
			<OurMenu />
			<Gallery />
			<Footer />
		</main>
	);
}
