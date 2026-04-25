import type { Metadata } from "next";

import ContactPage from "./content";

export const metadata: Metadata = {
	title: "Myžo • Let's get in touch",
	description: "Contact me for any questions or inquiries",
};

export default function Page() {
	return <ContactPage />;
}
