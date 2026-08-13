"use client";

import { useRef, useState } from "react";

import { useT } from "next-i18next/client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import toast from "react-hot-toast";

import Button from "@/components/Button";

import { SOFT_EASE } from "@/assets/styles/eases";

import { CONTACT_FIELDS, CONTACT_MESSAGE_FIELD_NAME } from "@/constants/contact";
import { SEND_EMAIL_ENDPOINT } from "@/constants/site";

const FIELD_CLASSES =
	"border-ink-black/15 focus:border-ink-black text-ink-black placeholder:text-ink-black/35 sans-lg w-full border-b bg-transparent py-3 outline-none transition-colors";

export default function ContactForm() {
	const formRef = useRef<HTMLFormElement>(null);

	const [isSending, setIsSending] = useState(false);

	const { t } = useT();

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

			return data.message ?? t("contact.toast.success");
		};

		toast.promise(
			send().finally(() => setIsSending(false)),
			{
				loading: t("contact.toast.loading"),
				success: (message: string) => message,
				error: (error: unknown) => (error instanceof Error && error.message ? error.message : t("contact.toast.error")),
			},
		);
	};

	return (
		<form ref={formRef} className="flex flex-col gap-8" onSubmit={handleSubmit}>
			{CONTACT_FIELDS.map((field) => (
				<div key={field.name} className="contact-field">
					<label className="sans-sm text-ink-black mb-1 block font-bold" htmlFor={field.name}>
						{t(`contact.fields.${field.name}.label`)}
					</label>

					<input
						className={FIELD_CLASSES}
						id={field.name}
						name={field.name}
						placeholder={t(`contact.fields.${field.name}.placeholder`)}
						type={field.type}
						required
					/>
				</div>
			))}

			<div className="contact-field">
				<label className="sans-sm text-ink-black mb-1 block font-bold" htmlFor={CONTACT_MESSAGE_FIELD_NAME}>
					{t("contact.fields.message.label")}
				</label>

				<textarea
					className={`${FIELD_CLASSES} min-h-40 resize-none`}
					id={CONTACT_MESSAGE_FIELD_NAME}
					name={CONTACT_MESSAGE_FIELD_NAME}
					placeholder={t("contact.fields.message.placeholder")}
					required
				/>
			</div>

			<div className="contact-field flex justify-end">
				<Button disabled={isSending} type="submit">
					{isSending ? t("contact.submitting") : t("contact.submit")}
				</Button>
			</div>
		</form>
	);
}
