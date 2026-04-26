import { Monitor, Paintbrush, Server } from "lucide-react";

import type Skill from "@/types/skill";

const skillsList: Skill[] = [
	{
		icon: Paintbrush,
		iconClasses: "text-pink-400",
		title: "Design",
		description:
			"Crafting intuitive, high-end interfaces that prioritize seamless interaction and a premium aesthetic.",
	},
	{
		icon: Monitor,
		iconClasses: "text-blue-400",
		title: "Frontend",
		description: "Engineering high-speed, responsive applications optimized for performance on every modern screen.",
	},
	{
		icon: Server,
		iconClasses: "text-brand-300",
		title: "Backend",
		description: "Architecting stable, secure server environments designed to scale alongside your digital product.",
	},
];

export default skillsList;
