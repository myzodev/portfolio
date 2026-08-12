"use client";

import { useRef, useState } from "react";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import toast from "react-hot-toast";

import Button from "@/components/Button";

import { SOFT_EASE } from "@/assets/styles/eases";

import { CONTACT_FIELDS, CONTACT_MESSAGE_FIELD } from "@/constants/contact";
import { SEND_EMAIL_ENDPOINT } from "@/constants/site";

const FIELD_CLASSES =
	"border-ink-black/15 focus:border-ink-black text-ink-black placeholder:text-ink-black/35 sans-lg w-full border-b bg-transparent py-3 outline-none transition-colors";

export default function ContactForm() {
	const formRef = useRef<HTMLFormElement>(null);

	const [isSending, setIsSending] = useState(false);

	useGSAP(
		() => {
			if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

			gsap.set(".contact-field", { autoAlpha: 0, y: 24 });

			gsap.to(".contact-field", {
				autoAlpha: 1,
				y: 0,
				duration: 0.9,
				stagger: 0.1,
				ease: SOFT_EASE,
				delay: 0.7,
			});
		},
		{ scope: formRef },
	);

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const form = event.currentTarget;

		setIsSending(true);

		const send = async () => {
			const response = await fetch(SEND_EMAIL_ENDPOINT, {
				method: "POST",
				body: JSON.stringify(Object.fromEntries(new FormData(form))),
			});

			const data = await response.json().catch(() => ({}));

			if (!response.ok) throw new Error(data.message);

			form.reset();

			return data.message ?? "Message sent.";
		};

		toast.promise(
			send().finally(() => setIsSending(false)),
			{
				loading: "Sending message...",
				success: (message: string) => message,
				error: (error: unknown) =>
					error instanceof Error && error.message ? error.message : "Sending failed. Please try again.",
			},
		);
	};

	return (
		<form ref={formRef} className="flex flex-col gap-8" onSubmit={handleSubmit}>
			{CONTACT_FIELDS.map((field) => (
				<div key={field.name} className="contact-field">
					<label className="sans-sm text-ink-black mb-1 block font-bold" htmlFor={field.name}>
						{field.label}
					</label>

					<input
						className={FIELD_CLASSES}
						id={field.name}
						name={field.name}
						placeholder={field.placeholder}
						type={field.type}
						required
					/>
				</div>
			))}

			<div className="contact-field">
				<label className="sans-sm text-ink-black mb-1 block font-bold" htmlFor={CONTACT_MESSAGE_FIELD.name}>
					{CONTACT_MESSAGE_FIELD.label}
				</label>

				<textarea
					className={`${FIELD_CLASSES} min-h-40 resize-none`}
					id={CONTACT_MESSAGE_FIELD.name}
					name={CONTACT_MESSAGE_FIELD.name}
					placeholder={CONTACT_MESSAGE_FIELD.placeholder}
					required
				/>
			</div>

			<div className="contact-field flex justify-end">
				<Button disabled={isSending} type="submit">
					{isSending ? "Sending..." : "Ship it"}
				</Button>
			</div>
		</form>
	);
}
