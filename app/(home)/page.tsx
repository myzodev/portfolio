import type { Metadata } from "next";

import HomePage from "./content";

export const metadata: Metadata = {
	title: "Myžo • Enhance Your Online Experience",
	description:
		"Transform your ideas into fast, responsive, and modern websites and applications that provide an intuitive and exceptional user experience",
};

export default function Page() {
	return <HomePage />;
}
