import socialLinksData from "@/data/social-links";

import ContactForm from "./components/ContactForm";
import ContactIntro from "./components/ContactIntro";

import type { Metadata } from "next/types";

export const metadata: Metadata = {
	title: "Myžo • Contact",
	description: "Get in touch with me to discuss your project or collaboration.",
};

export default function ContactPage() {
	return (
		<section className="bg-powder-petal text-ink-black flex min-h-screen flex-col rounded-[48px] pt-32 pb-8 md:rounded-[64px] md:pt-44 lg:pt-54">
			<div className="container grid flex-1 grid-cols-12">
				<article className="col-span-12 md:col-span-5">
					<ContactIntro />
				</article>

				<div className="col-span-12 mt-14 md:col-span-7">
					<ContactForm />
				</div>
			</div>

			<div className="container">
				<footer className="border-ink-black/15 mt-16 flex flex-wrap items-center justify-between gap-x-10 gap-y-4 border-t pt-8">
					<ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
						{socialLinksData.map((link) => (
							<li key={link.href}>
								<a
									className="sans-sm text-ink-black/70 hover:text-peach font-semibold transition-colors"
									href={link.href}
									rel="noreferrer noopener"
									target="_blank"
								>
									{link.label}
								</a>
							</li>
						))}
					</ul>

					<small className="sans-sm text-ink-black/70 font-semibold">Made in 2026</small>
				</footer>
			</div>
		</section>
	);
}
