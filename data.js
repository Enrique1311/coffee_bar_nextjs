import {
	BellPlus,
	BookOpen,
	Briefcase,
	Brush,
	MessageCircleMore,
	Instagram,
	Facebook,
	Images,
	Home,
	Inbox,
	Mail,
	PanelsTopLeft,
	Phone,
	UserRound,
	UsersRound,
	Wrench,
} from "lucide-react";

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

export const dataSlider = [
	{
		id: 1,
		url: "/slider-1.jpg",
	},
	{
		id: 2,
		url: "/slider-2.jpg",
	},
	{
		id: 3,
		url: "/slider-3.jpg",
	},
	{
		id: 4,
		url: "/slider-4.jpg",
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

export const dataExperience = [
	{
		id: 1,
		title: "Frontend Development  💄",
		experience: [
			{
				name: "HTML",
				subtitle: "Experimentado",
				value: 80,
			},
			{
				name: "CSS",
				subtitle: "Intermedio",
				value: 75,
			},
			{
				name: "JavaScript",
				subtitle: "Experimentado",
				value: 60,
			},
			{
				name: "Tailwind CSS",
				subtitle: "Experimentado",
				value: 30,
			},
			{
				name: "React",
				subtitle: "Experimentado",
				value: 60,
			},
			{
				name: "Bootstrap",
				subtitle: "Basic",
				value: 50,
			},
		],
	},
	{
		id: 2,
		title: "Backend Development  🥷",
		experience: [
			{
				name: "Node JS",
				subtitle: "Experimentado",
				value: 80,
			},
			{
				name: "Mongo DB",
				subtitle: "Intermedio",
				value: 75,
			},
			{
				name: "Python",
				subtitle: "Basic",
				value: 60,
			},
			{
				name: "MySQL",
				subtitle: "Experimentado",
				value: 60,
			},
			{
				name: "PHP",
				subtitle: "Experimentado",
				value: 60,
			},
			{
				name: "Django",
				subtitle: "Basic",
				value: 60,
			},
		],
	},
];

export const dataServices = [
	{
		id: 1,
		title: "Desarrollo Web",
		icon: <PanelsTopLeft />,
		features: [
			{
				name: "Desarrollo de sitios web personalizados",
			},
			{
				name: "Diseño y desarrollo responsive",
			},
			{
				name: "Optimización SEO",
			},
			{
				name: "Desarrollo de aplicaciones web",
			},
			{
				name: "Gestión de contenido",
			},
			{
				name: "Comercio electrónico",
			},
			{
				name: "Mantenimiento y soporte continuo",
			},
		],
	},
	{
		id: 2,
		title: "Creación de contenido",
		icon: <BellPlus />,
		features: [
			{
				name: "Redacción de contenido original y de calidad",
			},
			{
				name: "Creación de vídeos atractivos y dinámicos",
			},
			{
				name: "Diseño gráfico para una imagen impactante",
			},
			{
				name: "Edición profesional de textos y materiales visuales",
			},
			{
				name: "Estrategias de marketing de contenidos efectivas",
			},
			{
				name: "Producción de podcasts informativos y entretenidos",
			},
			{
				name: "Generación de infografías claras y visualmente atractivas",
			},
			{
				name: "Fotografía profesional para capturar momentos excepcionales",
			},
		],
	},
	{
		id: 3,
		title: "UI/UX Design",
		icon: <Brush />,
		features: [
			{
				name: "Diseño intuitivo para una experiencia de usuario fluida",
			},
			{
				name: "Prototipado interactivo para visualizar la interfaz",
			},
			{
				name: "Investigación de usuarios para comprender necesidades y expectativas",
			},
			{
				name: "Optimización de la usabilidad para mejorar la accesibilidad",
			},
			{
				name: "Pruebas de usabilidad para evaluar la experiencia",
			},
			{
				name: "Diseño responsive para adaptarse a diferentes dispositivos",
			},
		],
	},
];

export const dataTestimonials = [
	{
		id: 1,
		name: "George Snow",
		description:
			"¡Increíble plataforma! Los testimonios aquí son genuinos y me han ayudado a tomar decisiones informadas. ¡Altamente recomendado!",
		imageUrl: "/profile-1.jpeg",
	},
	{
		id: 2,
		name: "Juan Pérez",
		description:
			"Me encanta la variedad de testimonios disponibles en esta página. Es inspirador ver cómo otras personas han superado desafíos similares a los míos. ¡Gracias por esta invaluable fuente de motivación!",
		imageUrl: "/profile-2.jpeg",
	},
	{
		id: 3,
		name: "María García",
		description:
			"Excelente recurso para obtener opiniones auténticas sobre diferentes productos y servicios. Me ha ayudado mucho en mis compras en línea. ¡Bravo por este sitio!",
		imageUrl: "/profile-3.jpeg",
	},
	{
		id: 4,
		name: "Laura Snow",
		description:
			"¡Qué descubrimiento tan fantástico! Los testimonios aquí son honestos y detallados. Me siento más seguro al tomar decisiones después de leer las experiencias compartidas por otros usuarios.",
		imageUrl: "/profile-3.jpeg",
	},
	{
		id: 5,
		name: "Carlos Sánchez",
		description:
			"Una joya en la web. Los testimonios son fáciles de encontrar y están bien organizados. ¡Definitivamente mi destino número uno cuando necesito referencias confiables!",
		imageUrl: "/profile-2.jpeg",
	},
	{
		id: 6,
		name: "Antonio Martínez",
		description:
			"¡Fantástico recurso para aquellos que buscan validación antes de tomar decisiones importantes! Los testimonios aquí son veraces y realmente útiles. ¡Gracias por simplificar mi proceso de toma de decisiones!",
		imageUrl: "/profile-3.jpeg",
	},
];
