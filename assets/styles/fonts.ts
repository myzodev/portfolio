import localFont from "next/font/local";

export const Synonym = localFont({
	src: [
		{ path: "../fonts/Synonym-Regular.woff2", weight: "400", style: "normal" },
		{ path: "../fonts/Synonym-Semibold.woff2", weight: "600", style: "normal" },
	],
	variable: "--font-synonym",
	display: "swap",
	fallback: ["sans-serif"],
});

export const Chillax = localFont({
	src: [
		{ path: "../fonts/Chillax-Regular.woff2", weight: "400", style: "normal" },
		{ path: "../fonts/Chillax-Bold.woff2", weight: "700", style: "normal" },
	],
	variable: "--font-chillax",
	display: "swap",
	fallback: ["sans-serif"],
});
