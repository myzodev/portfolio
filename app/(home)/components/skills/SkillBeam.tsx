"use client";

import React, { forwardRef, useRef } from "react";

import { ArrowDownLeft, Monitor, Paintbrush, Server } from "lucide-react";

import { cn } from "@/utils/utils";

import { AnimatedBeam } from "@/components/ui/animated-beam";

const Circle = forwardRef<HTMLDivElement, { className?: string; children?: React.ReactNode }>(
	({ className, children }, ref) => {
		return (
			<div
				ref={ref}
				className={cn(
					"bg-background z-10 flex size-12 shrink-0 items-center justify-center rounded-full border-2 p-3 sm:size-16",
					className,
				)}
			>
				{children}
			</div>
		);
	},
);

Circle.displayName = "Circle";

export function SkillBeam({ className }: { className?: string }) {
	const containerRef = useRef<HTMLDivElement>(null);
	const designRef = useRef<HTMLDivElement>(null);
	const frontendRef = useRef<HTMLDivElement>(null);
	const backendRef = useRef<HTMLDivElement>(null);

	// Reusable text block based on your screenshot
	const Description = ({ title, text, className }: { title: string; text: string; className?: string }) => (
		<article className={cn("mt-2.5 flex w-full flex-col sm:mt-6", className)}>
			<h2 className="text-foreground text-lg tracking-wider uppercase sm:text-2xl">{title}</h2>

			<div className="bg-border my-4 h-px w-full" />

			<p className="text-muted-foreground">{text}</p>
		</article>
	);

	return (
		<div
			className={cn("relative flex w-full flex-col items-center justify-center overflow-hidden", className)}
			ref={containerRef}
		>
			<div className="flex size-full max-w-6xl flex-col items-start justify-between gap-10 sm:flex-row sm:gap-18">
				<div className="flex flex-1 max-md:gap-4 sm:flex-col sm:items-start">
					<Circle ref={designRef}>
						<Paintbrush className="size-8 text-pink-500 sm:size-6" strokeWidth={2} />
					</Circle>

					<Description
						className="md:text-left"
						title="Design"
						text="Modern, intuitive interfaces that ensure smooth interactions and a premium user experience."
					/>
				</div>

				<div className="flex flex-1 max-md:gap-4 sm:flex-col sm:items-center">
					<Circle ref={frontendRef}>
						<Monitor className="size-8 text-blue-500 sm:size-6" strokeWidth={2} />
					</Circle>

					<Description
						className="md:text-center"
						title="Frontend"
						text="Building fast, responsive web applications tailored for performance across all modern devices."
					/>
				</div>

				<div className="flex flex-1 max-md:gap-4 sm:flex-col sm:items-end">
					<Circle ref={backendRef}>
						<Server className="size-8 text-emerald-500 sm:size-6" strokeWidth={2} />
					</Circle>

					<Description
						className="md:text-right"
						title="Backend"
						text="Developing stable server architectures and secure data management for scalable digital products."
					/>
				</div>
			</div>

			<AnimatedBeam containerRef={containerRef} fromRef={designRef} toRef={frontendRef} duration={3} />
			<AnimatedBeam containerRef={containerRef} fromRef={frontendRef} toRef={backendRef} duration={3} />
		</div>
	);
}
