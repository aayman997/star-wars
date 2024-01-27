import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Orbitron", ...defaultTheme.fontFamily.sans],
				heading: ["STJEDISE", ...defaultTheme.fontFamily.serif],
			},
			container: {
				center: true,
				padding: {
					DEFAULT: "16px",
				},
			},
			colors: {
				brand: {
					50: "#FBFBFF",
					100: "#EDF9FC",
					200: "#DBF3FA",
					300: "#B8E8F5",
					400: "#94DCF0",
					500: "#72D0EB",
					600: "#29B9E0",
					700: "#1783A1",
					800: "#0D4959",
					900: "#051D24",
				},
				charcoal: "#444C56",
				richBlack: "#101419",
				denim: "#005BBB",
			},
		},
	},
	plugins: [],
};

export default config;
