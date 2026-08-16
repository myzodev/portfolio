"use client";

import { useEffect, useRef, useState, useTransition } from "react";

import { useT } from "next-i18next/client";
import { usePathname, useRouter } from "next/navigation";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLenis } from "lenis/react";

import getRouteLabel from "@/utils/get-route-label";

import { CURTAIN_EASE, SOFT_EASE } from "@/assets/styles/eases";

gsap.registerPlugin(ScrollTrigger);

type Phase = "idle" | "covering" | "loading" | "revealing";

const SETTLE_TIMEOUT = 4000;
export default function PageTransition() {
	const [label, setLabel] = useState("");
	const [isPending, startTransition] = useTransition();

	const rootRef = useRef<HTMLDivElement>(null);
	const settleRef = useRef<(() => void) | null>(null);
	const phaseRef = useRef<Phase>("idle");
	const hrefRef = useRef<string | null>(null);
	const timeoutRef = useRef<number | null>(null);

	const router = useRouter();
	const pathname = usePathname();

	const lenis = useLenis();
	const lenisRef = useRef(lenis);

	const { t } = useT();
	const tRef = useRef(t);

	useEffect(() => {
		lenisRef.current = lenis;
	}, [lenis]);

	useEffect(() => {
		tRef.current = t;
	}, [t]);

	useGSAP(
		() => {
			const isReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
			const curtains = [".transition-accent", ".transition-panel"];

			const reset = () => {
				gsap.set(curtains, { yPercent: 100 });
				gsap.set(".transition-label", { autoAlpha: 0, y: 28 });
				gsap.set(rootRef.current, { pointerEvents: "none" });
			};

			reset();

			const cover = gsap.timeline({
				paused: true,
				defaults: { ease: CURTAIN_EASE },
				onComplete: () => {
					const href = hrefRef.current;

					if (!href) return;

					phaseRef.current = "loading";

					startTransition(() => router.push(href, { scroll: false }));

					timeoutRef.current = window.setTimeout(() => settleRef.current?.(), SETTLE_TIMEOUT);
				},
			});

			const reveal = gsap.timeline({
				paused: true,
				defaults: { ease: CURTAIN_EASE },
				onComplete: () => {
					phaseRef.current = "idle";
					hrefRef.current = null;

					reset();

					lenisRef.current?.start();
				},
			});

			if (isReduced) {
				cover
					.to(curtains, { yPercent: 0, duration: 0.2, ease: "none" }, 0)
					.to(".transition-label", { autoAlpha: 1, y: 0, duration: 0.2, ease: "none" }, 0);

				reveal.to(curtains, { yPercent: -100, duration: 0.2, ease: "none" }, 0);
			} else {
				cover
					.to(".transition-accent", { yPercent: 0, duration: 0.9 }, 0)
					.to(".transition-panel", { yPercent: 0, duration: 0.9 }, 0.12)
					.to(".transition-label", { autoAlpha: 1, y: 0, duration: 0.9, ease: SOFT_EASE }, 0.35);

				reveal
					.to(".transition-label", { autoAlpha: 0, y: -24, duration: 0.55, ease: SOFT_EASE }, 0)
					.to(".transition-panel", { yPercent: -100, duration: 1 }, 0.1)
					.to(".transition-accent", { yPercent: -100, duration: 1 }, 0.24);
			}

			settleRef.current = () => {
				if (phaseRef.current !== "loading") return;

				phaseRef.current = "revealing";

				if (timeoutRef.current) {
					clearTimeout(timeoutRef.current);
					timeoutRef.current = null;
				}

				lenisRef.current?.resize();
				lenisRef.current?.scrollTo(0, { immediate: true, force: true });

				ScrollTrigger.refresh();

				reveal.restart();
			};

			const start = (href: string) => {
				phaseRef.current = "covering";
				hrefRef.current = href;

				setLabel(getRouteLabel(new URL(href, window.location.origin).pathname, tRef.current));

				lenisRef.current?.stop();

				gsap.set(rootRef.current, { pointerEvents: "auto" });

				cover.restart();
			};

			const handleClick = (event: MouseEvent) => {
				if (event.defaultPrevented || event.button !== 0) return;
				if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

				const anchor = (event.target as Element | null)?.closest("a");

				if (!anchor) return;
				if (anchor.hasAttribute("download") || anchor.hasAttribute("data-no-transition")) return;

				const target = anchor.getAttribute("target");

				if (target && target !== "_self") return;

				const href = anchor.getAttribute("href");

				if (!href || href.startsWith("#")) return;

				const url = new URL(anchor.href, window.location.href);

				if (url.origin !== window.location.origin) return;

				if (url.pathname === window.location.pathname && url.search === window.location.search) return;

				event.preventDefault();

				if (phaseRef.current !== "idle") return;

				start(url.pathname + url.search + url.hash);
			};

			document.addEventListener("click", handleClick, true);

			return () => {
				document.removeEventListener("click", handleClick, true);

				if (timeoutRef.current) clearTimeout(timeoutRef.current);
			};
		},
		{ scope: rootRef },
	);

	useEffect(() => {
		if (isPending) return;
		settleRef.current?.();
	}, [isPending, pathname]);

	return (
		<div ref={rootRef} className="pointer-events-none fixed inset-0 z-60 overflow-hidden" aria-hidden>
			<div className="transition-accent bg-peach absolute inset-0" />

			<div className="transition-panel bg-ink-black absolute inset-0 bg-[url('/images/noise.png')] bg-size-[110px_110px] bg-repeat">
				<div className="flex h-full items-center justify-center">
					<span className="transition-label font-chillax text-powder-petal text-[2.5rem] font-bold tracking-tight md:text-[4rem]">
						{label}
						<span className="text-peach">.</span>
					</span>
				</div>
			</div>
		</div>
	);
}
