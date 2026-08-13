"use client";

import { useRef } from "react";

import { useT } from "next-i18next/client";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ArrowUpRightIcon } from "lucide-react";

import { useLocalizedHref } from "@/hooks/use-language";

import { SOFT_EASE, SWEEP_EASE } from "@/assets/styles/eases";

import { HOME_ROUTE } from "@/constants/routes";

interface Props {
	href: string;
	linkKey: string;
	index: number;
	onNavigate: () => void;
}

const LABEL_CLASSES =
	"font-chillax block text-[2.5rem] leading-[1.1] font-bold tracking-tight md:text-[3.75rem] lg:text-[5rem]";

export default function NavbarMenuLink({ href, linkKey, index, onNavigate }: Props) {
	const rowRef = useRef<HTMLAnchorElement>(null);
	const hoverTl = useRef<gsap.core.Timeline | null>(null);

	const pathname = usePathname();

	const { t } = useT();

	const localizeHref = useLocalizedHref();

	const label = t(`common.menu.${linkKey}.label`);

	const isActive = href === HOME_ROUTE ? pathname === HOME_ROUTE : pathname.startsWith(href);

	useGSAP(
		() => {
			gsap.set(".row-label-hover", { yPercent: 105 });
			gsap.set(".row-meta", { xPercent: -35, autoAlpha: 0 });

			hoverTl.current = gsap
				.timeline({ paused: true, defaults: { duration: 1, ease: SWEEP_EASE } })
				.to(".row-label", { yPercent: -105 }, 0)
				.to(".row-label-hover", { yPercent: 0 }, 0)
				.to(".row-meta", { xPercent: 0, autoAlpha: 1, duration: 0.8, stagger: 0.07, ease: SOFT_EASE }, 0.24);
		},
		{ scope: rowRef },
	);

	const handleEnter = () => {
		hoverTl.current?.timeScale(1).play();
	};

	const handleLeave = () => {
		hoverTl.current?.timeScale(1.15).reverse();
	};

	return (
		<Link
			ref={rowRef}
			className="menu-row group relative flex items-center gap-4 overflow-hidden py-3 md:gap-8 md:py-4"
			href={localizeHref(href)}
			onBlur={handleLeave}
			onClick={onNavigate}
			onFocus={handleEnter}
			onMouseEnter={handleEnter}
			onMouseLeave={handleLeave}
		>
			<span className="relative flex w-8 items-center gap-2 md:w-16">
				<span className="sans-sm text-powder-petal/50 group-hover:text-powder-petal font-semibold transition-colors duration-500">
					0{index + 1}
				</span>

				{isActive && <span className="bg-peach size-1.5 rounded-full" aria-hidden />}
			</span>

			<span className="row-text relative block overflow-hidden">
				<span className={`row-label text-powder-petal ${LABEL_CLASSES}`}>{label}</span>

				<span className={`row-label-hover text-peach absolute inset-0 ${LABEL_CLASSES}`} aria-hidden>
					{label}
				</span>
			</span>

			<span className="text-powder-petal relative ml-auto flex items-center gap-3 md:gap-5">
				<span className="row-meta sans-sm hidden font-semibold md:block">
					{isActive ? t("common.nav.youAreHere") : t(`common.menu.${linkKey}.caption`)}
				</span>

				<ArrowUpRightIcon className="row-meta size-6 md:size-8" />
			</span>
		</Link>
	);
}
