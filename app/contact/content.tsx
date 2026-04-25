import PageHeader from "@/components/PageHeader";

import ContactBlock from "./components/contact/ContactBlock";

export default function ContactPage() {
	return (
		<>
			<PageHeader text="Got a question?" highlightText="Ask now" />
			<ContactBlock />
		</>
	);
}
