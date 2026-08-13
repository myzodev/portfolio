"use client";

import { useRef } from "react";

import { useT } from "next-i18next/client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import { CURTAIN_EASE, REVEAL_EASE, SOFT_EASE } from "@/assets/styles/eases";

import { EMAIL } from "@/constants/site";
import menuLinksData from "@/data/menu-links";
import socialLinksData from "@/data/social-links";

import NavbarMenuLink from "./NavbarMenuLink";

interface Props {
	isOpen: boolean;
	onClose: () => void;
}

export default function NavbarMenuPanel({ isOpen, onClose }: Props) {
	const panelRef = useRef<HTMLDivElement>(null);
	const timelineRef = useRef<gsap.core.Timeline | null>(null);

	const { t } = useT();

	useGSAP(
		() => {
			gsap.set([".menu-curtain-accent", ".menu-curtain"], { yPercent: -100 });
			gsap.set(".menu-glow", { autoAlpha: 0, scale: 0.6 });
			gsap.set(".menu-row", { yPercent: 110 });
			gsap.set(".menu-line", { scaleX: 0 });
			gsap.set([".menu-label", ".menu-footer-item"], { autoAlpha: 0, y: 28 });

			const timeline = gsap.timeline({ paused: true, defaults: { ease: REVEAL_EASE } });

			if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
				timeline
					.set([".menu-curtain-accent", ".menu-curtain"], { yPercent: 0 })
					.set([".menu-row", ".menu-line"], { yPercent: 0, scaleX: 1 })
					.to([".menu-glow", ".menu-label", ".menu-footer-item"], {
						autoAlpha: 1,
						scale: 1,
						y: 0,
						duration: 0.3,
						ease: "none",
					});

				timelineRef.current = timeline;

				return;
			}

			timeline
				.to(".menu-curtain-accent", { yPercent: 0, duration: 1.05, ease: CURTAIN_EASE }, 0)
				.to(".menu-curtain", { yPercent: 0, duration: 1.05, ease: CURTAIN_EASE }, 0.16)
				.to(".menu-glow", { autoAlpha: 1, scale: 1, duration: 2, ease: SOFT_EASE }, 0.6)
				.to(".menu-label", { autoAlpha: 1, y: 0, duration: 0.9, ease: SOFT_EASE }, 0.7)
				.to(".menu-line", { scaleX: 1, duration: 1.2, stagger: 0.1, ease: CURTAIN_EASE }, 0.66)
				.to(".menu-row", { yPercent: 0, duration: 1.35, stagger: 0.1 }, 0.72)
				.to(".menu-footer-item", { autoAlpha: 1, y: 0, duration: 1, stagger: 0.08, ease: SOFT_EASE }, 1);

			timelineRef.current = timeline;
		},
		{ scope: panelRef },
	);

	useGSAP(
		() => {
			const timeline = timelineRef.current;

			if (!timeline) return;

			if (isOpen) timeline.timeScale(1).play();
			else timeline.timeScale(1.35).reverse();
		},
		{ dependencies: [isOpen], scope: panelRef },
	);

	return (
		<div
			ref={panelRef}
			className="fixed inset-0 z-40 overflow-hidden"
			aria-hidden={!isOpen}
			aria-label={t("common.nav.siteNavigation")}
			id="navbar-menu"
			inert={!isOpen}
			role="dialog"
		>
			<div className="menu-curtain-accent bg-peach absolute inset-0" aria-hidden />

			<div
				className="menu-curtain bg-ink-black absolute inset-0 bg-[url('/images/noise.png')] bg-size-[110px_110px] bg-repeat"
				aria-hidden
			/>

			<div
				className="menu-glow bg-peach/12 pointer-events-none absolute -top-60 -right-60 aspect-square w-[45rem] rounded-full blur-[140px]"
				aria-hidden
			/>

			<div className="relative container flex h-full flex-col overflow-y-auto pt-28 pb-10 md:pt-32">
				<small className="menu-label sans-md text-powder-petal/40 uppercase">{t("common.nav.navigation")}</small>

				<nav className="my-auto">
					<ul className="relative">
						{menuLinksData.map((link, index) => (
							<li key={link.href} className="relative">
								<span
									className="menu-line bg-powder-petal/15 absolute top-0 left-0 h-px w-full origin-left"
									aria-hidden
								/>

								<div className="overflow-hidden">
									<NavbarMenuLink href={link.href} index={index} linkKey={link.key} onNavigate={onClose} />
								</div>
							</li>
						))}

						<span
							className="menu-line bg-powder-petal/15 absolute bottom-0 left-0 h-px w-full origin-left"
							aria-hidden
						/>
					</ul>
				</nav>

				<footer className="flex flex-wrap items-end justify-between gap-x-8 gap-y-6">
					<div className="menu-footer-item">
						<small className="sans-md text-powder-petal/40 mb-1 uppercase">{t("common.getInTouch")}</small>

						<a className="sans-lg md:sans-xl hover:text-peach font-semibold transition-colors" href={`mailto:${EMAIL}`}>
							{EMAIL}
						</a>
					</div>

					<ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
						{socialLinksData.map((link) => (
							<li key={link.href} className="menu-footer-item">
								<a
									className="sans-md text-powder-petal/60 hover:text-peach font-semibold transition-colors"
									href={link.href}
									rel="noreferrer noopener"
									target="_blank"
								>
									{link.label}
								</a>
							</li>
						))}
					</ul>
				</footer>
			</div>
		</div>
	);
}
