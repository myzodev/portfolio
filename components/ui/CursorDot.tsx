"use client";

import { useEffect } from "react";

import { useAnimate } from "framer-motion";

export default function CursorDot() {
	const [scope, animate] = useAnimate();

	useEffect(() => {
		if (window.innerWidth < 1024) return;

		const handleMouseMove = (event: MouseEvent) => {
			const { clientX, clientY } = event;
			animate(scope.current, { x: clientX, y: clientY }, { type: "tween", duration: 0.1, mass: 1 });
		};

		const handleOver = (event: MouseEvent) => {
			const target = event.target as HTMLElement;

			if (target.closest("button, a")) {
				animate(scope.current, { scale: 0 }, { type: "tween", duration: 0.1 });
			}
		};

		const handleOut = (event: MouseEvent) => {
			const target = event.target as HTMLElement;

			if (target.closest("button, a")) {
				animate(scope.current, { scale: 1 }, { duration: 0.1 });
			}
		};

		window.addEventListener("mousemove", handleMouseMove);
		window.addEventListener("mouseover", handleOver); // Use mouseover/out for delegation
		window.addEventListener("mouseout", handleOut);

		return () => {
			window.removeEventListener("mousemove", handleMouseMove);
			window.removeEventListener("mouseover", handleOver);
			window.removeEventListener("mouseout", handleOut);
			console.log(111);
		};
	}, [animate, scope]);

	return (
		<div
			ref={scope}
			className="bg-brand-300 pointer-events-none fixed top-0 left-0 z-100 hidden size-4 -translate-x-1/2 -translate-y-1/2 rounded-full will-change-transform lg:block"
		/>
	);
}
