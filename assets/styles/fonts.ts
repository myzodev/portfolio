import localFont from "next/font/local";

// Clash Display
export const ClashDisplay = localFont({
	src: [{ path: "../fonts/ClashDisplay-Semibold.woff2", weight: "700", style: "normal" }],
	variable: "--font-clash-display",
	display: "swap",
	fallback: ["sans-serif"],
});

// Nunito
export const Nunito = localFont({
	src: [
		{ path: "../fonts/Nunito-Medium.woff2", weight: "500", style: "normal" },
		{ path: "../fonts/Nunito-Bold.woff2", weight: "700", style: "normal" },
	],
	variable: "--font-nunito",
	display: "swap",
	fallback: ["sans-serif"],
});
