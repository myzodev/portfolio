"use client";

import { useEffect } from "react";

import { useAnimate } from "framer-motion";

export default function CursorDot() {
	const [scope, animate] = useAnimate();

	useEffect(() => {
		if (window.innerWidth < 1024) return;

		const handleMouseMove = (event: MouseEvent) => {
			const { clientX, clientY } = event;
			const target = event.target as HTMLElement;

			animate(scope.current, { x: clientX, y: clientY }, { type: "tween", duration: 0.1 });

			const isOverInteractive = Boolean(target.closest("button, a"));

			animate(scope.current, { scale: isOverInteractive ? 0 : 1 }, { duration: 0.1 });
		};

		window.addEventListener("mousemove", handleMouseMove);

		return () => {
			window.removeEventListener("mousemove", handleMouseMove);
		};
	}, [animate, scope]);

	return (
		<div
			ref={scope}
			className="bg-brand-300 pointer-events-none fixed top-0 left-0 z-100 hidden size-4 -translate-x-1/2 -translate-y-1/2 rounded-full will-change-transform lg:block"
		/>
	);
}
