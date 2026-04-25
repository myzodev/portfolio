import { Button } from "@/components/magicui/button";
import { Field, FieldGroup, FieldLabel, FieldSeparator } from "@/components/magicui/field";
import { Input } from "@/components/magicui/input";
import { Textarea } from "@/components/magicui/textarea";

export default function ContactForm() {
	return (
		<form className="col-span-12 md:col-span-7">
			<FieldGroup className="gap-4">
				<div className="grid grid-cols-1 gap-4 md:grid-cols-2">
					<Field className="gap-1.5">
						<FieldLabel className="sr-only" htmlFor="name">
							Name
						</FieldLabel>

						<Input id="name" type="text" placeholder="Your name" required />
					</Field>

					<Field className="gap-1.5">
						<FieldLabel className="sr-only" htmlFor="email">
							Email
						</FieldLabel>

						<Input id="email" type="email" placeholder="your@email.com" required />
					</Field>
				</div>

				<Field className="gap-1.5">
					<FieldLabel className="sr-only" htmlFor="subject">
						Subject
					</FieldLabel>

					<Input id="subject" type="text" placeholder="Subject" required />
				</Field>

				<Field>
					<Textarea id="message" className="h-40 resize-y" placeholder="Your message" required />
				</Field>

				<Field>
					<Button type="submit">Submit</Button>
				</Field>
			</FieldGroup>
		</form>
	);
}
