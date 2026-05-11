"use client";

import React, { forwardRef, useRef } from "react";

import { Monitor, Paintbrush, Server } from "lucide-react";

import { cn } from "@/utils/utils";

import { AnimatedBeam } from "@/components/magicui/animated-beam";

import skillsList from "@/libs/skills-list";

const Circle = forwardRef<HTMLDivElement, { className?: string; children?: React.ReactNode }>(
	({ className, children }, ref) => {
		return (
			<div
				ref={ref}
				className={cn(
					"bg-muted z-10 flex size-12 shrink-0 items-center justify-center rounded-full border p-3 md:size-16",
					className,
				)}
			>
				{children}
			</div>
		);
	},
);

Circle.displayName = "Circle";

const Description = ({ title, text, className }: { title: string; text: string; className?: string }) => (
	<article className={cn("mt-2.5 flex w-full flex-col md:mt-6", className)}>
		<h3 className="text-foreground text-lg tracking-wider uppercase md:text-2xl">{title}</h3>

		<div className="bg-border my-4 h-px w-full" />

		<p className="text-muted-foreground">{text}</p>
	</article>
);

export function SkillsBeam({ className }: { className?: string }) {
	const containerRef = useRef<HTMLDivElement>(null);
	const designRef = useRef<HTMLDivElement>(null);
	const frontendRef = useRef<HTMLDivElement>(null);
	const backendRef = useRef<HTMLDivElement>(null);

	const refsMap = [designRef, frontendRef, backendRef];
	const refsMapClasses = [
		"md:items-start md:text-left",
		"md:items-center md:text-center",
		"md:items-end md:text-right",
	];

	return (
		<div
			className={cn("relative flex w-full flex-col items-center justify-center overflow-hidden", className)}
			ref={containerRef}
		>
			<ul className="flex size-full flex-col items-start justify-between gap-10 md:flex-row md:gap-18">
				{skillsList.map((skill, index) => (
					<li key={index} className={cn("flex flex-1 max-md:gap-4 md:flex-col", refsMapClasses[index])}>
						<Circle ref={refsMap[index]}>
							<skill.icon className={cn("size-8 sm:size-6", skill.iconClasses)} strokeWidth={2} />
						</Circle>

						<Description title={skill.title} text={skill.description} />
					</li>
				))}
			</ul>

			<AnimatedBeam containerRef={containerRef} fromRef={designRef} toRef={frontendRef} duration={5} pathWidth={1} />
			<AnimatedBeam containerRef={containerRef} fromRef={frontendRef} toRef={backendRef} duration={5} pathWidth={1} />
		</div>
	);
}
