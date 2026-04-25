import type { Metadata } from "next";

import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
	title: "Myžo • Let's get in touch",
	description: "Contact me for any questions or inquiries",
};

export default function Page() {
	return (
		<>
			<PageHeader text="Got a question?" highlightText="Ask now" />
		</>
	);
}
