import ContactForm from "./ContactForm";
import ContactItems from "./ContactInfo";

export default function ContactBlock() {
	return (
		<section className="container grid grid-cols-12 gap-y-14 pb-20 md:gap-x-14 lg:pb-32">
			<ContactForm />
			<ContactItems />
		</section>
	);
}
