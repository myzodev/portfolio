"use client";

import { useState } from "react";

import Link from "next/link";

import { Menu } from "lucide-react";
import { MoveUpRightIcon } from "lucide-react";
import { motion } from "motion/react";

import { CONTACT_ROUTE, HOME_ROUTE, PROJECTS_ROUTE } from "@/utils/routes";

import ButtonLink from "@/components/ButtonLink";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { Button } from "@/components/ui/button";
import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerDescription,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from "@/components/ui/drawer";

const navLinks = [
	{ href: HOME_ROUTE, label: "Home" },
	{ href: PROJECTS_ROUTE, label: "Projects" },
	{ href: CONTACT_ROUTE, label: "Contact" },
] as const;

const smoothSpring = { type: "spring" as const, stiffness: 320, damping: 32, mass: 0.45 };

const headerTransition = smoothSpring;

const linkTransition = smoothSpring;

const footerTransition = smoothSpring;

const shellStagger = { delayChildren: 0.1, staggerChildren: 0.06 };

const linkStagger = { delayChildren: 0.06, staggerChildren: 0.07 };

export default function AppNavbar() {
	const [motionKey, setMotionKey] = useState(0);

	return (
		<nav className="border-border/50 bg-background/75 supports-backdrop-filter:bg-background/60 sticky top-0 z-40 border-b backdrop-blur-md">
			<div className="container flex items-center justify-between py-4">
				<Link className="transition-opacity hover:opacity-80" href="/">
					<h1 className="text-2xl font-bold">myžo.</h1>
				</Link>

				<div className="flex items-center">
					<AnimatedThemeToggler className="cursor-pointer" duration={500} />

					<Drawer
						shouldScaleBackground={false}
						direction="right"
						onOpenChange={(open) => {
							if (open) setMotionKey((k) => k + 1);
						}}
					>
						<DrawerTrigger asChild>
							<Button aria-label="Open navigation menu" size="icon-lg" variant="ghost">
								<Menu className="size-5" />
							</Button>
						</DrawerTrigger>

						<DrawerContent className="h-dvh gap-0 border-0! bg-transparent">
							<motion.div
								key={motionKey}
								animate="show"
								className="flex h-full flex-col px-2 pt-2 pb-6"
								initial="hidden"
								variants={{
									hidden: {},
									show: {
										transition: shellStagger,
									},
								}}
							>
								<motion.div
									transition={headerTransition}
									variants={{
										hidden: { opacity: 0, y: 8, filter: "blur(4px)" },
										show: { opacity: 1, y: 0, filter: "blur(0px)" },
									}}
								>
									<DrawerHeader className="border-border/60 border-b px-4 pb-4 text-left">
										<DrawerTitle className="font-heading text-lg tracking-tight">Menu</DrawerTitle>
										<DrawerDescription className="text-xs">Navigate the site</DrawerDescription>
									</DrawerHeader>
								</motion.div>

								<motion.ul
									className="flex flex-1 flex-col gap-1 px-2 pt-4"
									variants={{
										hidden: {},
										show: {
											transition: linkStagger,
										},
									}}
								>
									{navLinks.map(({ href, label }) => (
										<motion.li
											key={href}
											transition={linkTransition}
											variants={{
												hidden: { opacity: 0, x: 18, filter: "blur(3px)" },
												show: { opacity: 1, x: 0, filter: "blur(0px)" },
											}}
										>
											<DrawerClose asChild>
												<ButtonLink
													className="w-full rounded-sm text-sm font-bold uppercase"
													href={href}
													variant="ghost"
												>
													{label}
													<MoveUpRightIcon className="ml-auto size-4" />
												</ButtonLink>
											</DrawerClose>
										</motion.li>
									))}
								</motion.ul>

								<motion.div
									className="px-4 pt-2"
									transition={footerTransition}
									variants={{
										hidden: { opacity: 0, y: 6 },
										show: { opacity: 1, y: 0 },
									}}
								>
									<small className="text-muted-foreground text-xs">myžo</small>
								</motion.div>
							</motion.div>
						</DrawerContent>
					</Drawer>
				</div>
			</div>
		</nav>
	);
}
