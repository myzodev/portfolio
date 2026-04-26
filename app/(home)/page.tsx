import type { Metadata } from "next";

import HomePage from "./content";

export const metadata: Metadata = {
	title: "Myžo • Making Your Digital Product Shine",
	description:
		"I transform your ideas into fast, responsive, and modern digital products that provide an exceptional experience.",
};

export default function Page() {
	return <HomePage />;
}
