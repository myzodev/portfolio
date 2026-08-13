"use client";

import { useRef } from "react";

import { useT } from "next-i18next/client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Button from "@/components/Button";

import { CONTACT_ROUTE } from "@/constants/routes";
import helpData from "@/data/help";

gsap.registerPlugin(ScrollTrigger);

export default function HelpSection() {
	const sectionRef = useRef<HTMLElement>(null);

	const { t } = useT();

	useGSAP(
		() => {
			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: sectionRef.current,
					start: "top 60%",
					end: "75% center",
					scrub: 1,
				},
			});

			tl.from(".help-heading", {
				y: 30,
				opacity: 0,
				duration: 0.5,
				ease: "power2.out",
			})
				.from(
					".help-item",
					{
						y: 40,
						opacity: 0,
						duration: 0.8,
						stagger: 0.2,
						ease: "power2.out",
					},
					"-=0.2",
				)
				.from(
					".help-footer",
					{
						y: 20,
						opacity: 0,
						duration: 0.5,
						ease: "power2.out",
					},
					"-=0.4",
				);
		},
		{ scope: sectionRef },
	);

	return (
		<section
			ref={sectionRef}
			className="bg-powder-petal text-ink-black w-full rounded-4xl pt-16 pb-8 md:pt-24"
			aria-labelledby="help-heading"
		>
			<article className="container flex flex-col justify-between">
				<header>
					<h2 id="help-heading" className="help-heading display-md md:display-xl mb-6 md:mb-18 lg:mb-24">
						{t("home.help.heading")}
					</h2>
				</header>

				<ul
					className="mt-8 grid grid-cols-1 gap-x-6 gap-y-6 md:grid-cols-2 md:gap-y-10 lg:mt-auto lg:grid-cols-3"
					role="list"
				>
					{helpData.map((key, index) => (
						<li
							key={key}
							className="help-item border-ink-black-dimmed/25 bg-powder-petal border-l py-3 pl-4 md:py-4 md:pl-6"
						>
							<p className="text-cyan mb-6 font-mono" aria-hidden="true">
								0{index + 1}
							</p>

							<h3 className="display-md mb-2.5">{t(`home.help.items.${key}.title`)}</h3>

							<p className="display-xxs leading-[155%]">{t(`home.help.items.${key}.description`)}</p>
						</li>
					))}
				</ul>

				<footer className="help-footer border-ink-black-dimmed/25 mt-10 flex flex-wrap items-center justify-between gap-4 border-t pt-8 md:mt-16">
					<p className="display-md">
						{t("home.help.ctaLead")} <strong className="text-peach">{t("home.help.ctaHighlight")}</strong>
					</p>

					<Button href={CONTACT_ROUTE}>{t("common.getInTouch")}</Button>
				</footer>
			</article>
		</section>
	);
}
