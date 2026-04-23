"use client";

import { useEffect } from "react";

import { useAnimate } from "framer-motion";

export default function CursorDot() {
	const [scope, animate] = useAnimate();

	useEffect(() => {
		const handleMouseMove = (event: MouseEvent) => {
			const { clientX, clientY } = event;
			animate(scope.current, { x: clientX, y: clientY }, { type: "tween", mass: 0.1 });
		};

		const handleOver = (event: MouseEvent) => {
			const target = event.target as HTMLElement;

			if (target.closest("button, a")) {
				animate(scope.current, { scale: 0 }, { type: "spring", duration: 0.25 });
			}
		};

		const handleOut = (event: MouseEvent) => {
			const target = event.target as HTMLElement;

			if (target.closest("button, a")) {
				animate(scope.current, { scale: 1 }, { duration: 0.25 });
			}
		};

		window.addEventListener("mousemove", handleMouseMove);
		window.addEventListener("mouseover", handleOver); // Use mouseover/out for delegation
		window.addEventListener("mouseout", handleOut);

		return () => {
			window.removeEventListener("mousemove", handleMouseMove);
			window.removeEventListener("mouseover", handleOver);
			window.removeEventListener("mouseout", handleOut);
		};
	}, [animate, scope]);

	return (
		<div
			ref={scope}
			className="bg-brand-300 pointer-events-none fixed top-0 left-0 z-100 size-4 -translate-x-1/2 -translate-y-1/2 rounded-full will-change-transform"
		/>
	);
}
