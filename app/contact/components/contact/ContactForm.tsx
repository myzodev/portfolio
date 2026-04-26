"use client";

import { useState } from "react";

import { toast } from "sonner";

import { Button } from "@/components/magicui/button";
import { Field, FieldGroup, FieldLabel } from "@/components/magicui/field";
import { Input } from "@/components/magicui/input";
import { Spinner } from "@/components/magicui/spinner";
import { Textarea } from "@/components/magicui/textarea";

export default function ContactForm() {
	const [isSending, setIsSending] = useState(false);

	const handleSubmit = (event: any) => {
		event.preventDefault();

		try {
			const form = event.target as HTMLFormElement;
			const formData = new FormData(event.target);
			const messageData = Object.fromEntries(formData);

			if (!messageData.name || !messageData.email || !messageData.subject || !messageData.message) {
				toast.error("Please fill in all fields", { position: "top-center" });
				return;
			}

			toast.promise(
				async () => {
					setIsSending(true);
					return fetch("https://microservices.michalvalo.dev/send-email", {
						method: "POST",
						body: JSON.stringify(messageData),
					});
				},
				{
					loading: "Sending email...",
					position: "top-center",
					success: async (response) => {
						const data = await response.json();
						setIsSending(false);
						form.reset();
						return data.message;
					},
					error: async (response) => {
						const data = await response.json();
						setIsSending(false);
						return data.message;
					},
				},
			);
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<form className="col-span-12 md:col-span-7" onSubmit={handleSubmit}>
			<FieldGroup className="gap-4">
				<div className="grid grid-cols-1 gap-4 md:grid-cols-2">
					<Field className="gap-1.5">
						<FieldLabel className="sr-only" htmlFor="name">
							Name
						</FieldLabel>

						<Input id="name" type="text" name="name" placeholder="Your Name" />
					</Field>

					<Field className="gap-1.5">
						<FieldLabel className="sr-only" htmlFor="email">
							Email
						</FieldLabel>

						<Input id="email" type="email" name="email" placeholder="your@email.com" />
					</Field>
				</div>

				<Field className="gap-1.5">
					<FieldLabel className="sr-only" htmlFor="subject">
						Subject
					</FieldLabel>

					<Input id="subject" type="text" name="subject" placeholder="Subject" />
				</Field>

				<Field>
					<Textarea
						id="message"
						className="h-40 resize-y"
						name="message"
						placeholder="I have a milion dollar idea..."
					/>
				</Field>
			</FieldGroup>

			<div className="mt-4 text-right">
				<Button type="submit" disabled={isSending}>
					{isSending && <Spinner data-icon="inline-start" />}
					Ship Message
				</Button>
			</div>
		</form>
	);
}
