"use client";

import { useState } from "react";

import Link from "next/link";

import { Menu, XIcon } from "lucide-react";
import { FolderGitIcon, HouseIcon, MoveUpRightIcon, PhoneIcon } from "lucide-react";
import { motion } from "motion/react";

import { CONTACT_ROUTE, HOME_ROUTE, PROJECTS_ROUTE } from "@/utils/routes";

import { AnimatedThemeToggler } from "@/components/magicui/animated-theme-toggler";
import { Button } from "@/components/magicui/button";
import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerDescription,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from "@/components/magicui/drawer";
import ButtonLink from "@/components/ui/ButtonLink";

import NavbarLogo from "./navbar/NavbarLogo";

const navLinks = [
	{ href: HOME_ROUTE, label: "Home", icon: HouseIcon },
	{ href: PROJECTS_ROUTE, label: "Projects", icon: FolderGitIcon },
	{ href: CONTACT_ROUTE, label: "Contact", icon: PhoneIcon },
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
		<nav className="sticky top-0 z-40 pt-2 lg:pt-4">
			<div className="container px-2">
				<div className="bg-background supports-backdrop-filter:bg-background/60 border-border flex items-center justify-between rounded-lg border p-2 pl-4 backdrop-blur-md">
					<NavbarLogo />

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
									className="flex h-full flex-col p-4 pb-6"
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
										<DrawerHeader className="border-border flex flex-row justify-between border-b p-0 pb-4 text-left">
											<div>
												<DrawerTitle className="font-heading text-lg">Menu</DrawerTitle>
												<DrawerDescription className="-mt-0.5 text-xs">Navigate the site</DrawerDescription>
											</div>

											<DrawerTrigger asChild>
												<Button aria-label="Close navigation menu" size="icon-lg" variant="outline">
													<XIcon className="size-5" />
												</Button>
											</DrawerTrigger>
										</DrawerHeader>
									</motion.div>

									<motion.ul
										className="flex flex-1 flex-col gap-1 pt-4"
										variants={{
											hidden: {},
											show: {
												transition: linkStagger,
											},
										}}
									>
										{navLinks.map(({ href, label, icon: Icon }) => (
											<motion.li
												key={href}
												className="-mx-2.5"
												transition={linkTransition}
												variants={{
													hidden: { opacity: 0, x: 18, filter: "blur(3px)" },
													show: { opacity: 1, x: 0, filter: "blur(0px)" },
												}}
											>
												<DrawerClose asChild>
													<ButtonLink
														className="h-10 w-full gap-3 rounded-sm text-sm font-bold uppercase"
														href={href}
														variant="ghost"
													>
														<Icon className="size-4" />
														{label}
														<MoveUpRightIcon className="ml-auto size-3" />
													</ButtonLink>
												</DrawerClose>
											</motion.li>
										))}
									</motion.ul>

									<motion.footer
										className="mt-2"
										transition={footerTransition}
										variants={{
											hidden: { opacity: 0, y: 6 },
											show: { opacity: 1, y: 0 },
										}}
									>
										<small className="text-muted-foreground text-xs">myžo</small>
									</motion.footer>
								</motion.div>
							</DrawerContent>
						</Drawer>
					</div>
				</div>
			</div>
		</nav>
	);
}
