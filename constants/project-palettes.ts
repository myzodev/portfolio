import type { ProjectColor, ProjectPalette } from "@/types/project";

export const PROJECT_PALETTES: Record<ProjectColor, ProjectPalette> = {
	green: {
		bgImage: "#132323",
		bgText: "#182c2c",
		textColor: "#cce5dd",
		accentColor: "#5eb381",
	},
	"lime-green": {
		bgImage: "#162320",
		bgText: "#1f2e29",
		textColor: "#d8e7d7",
		accentColor: "#8fb363",
	},
	red: {
		bgImage: "#1b1e22",
		bgText: "#262327",
		textColor: "#e3dad8",
		accentColor: "#bf7971",
	},
	orange: {
		bgImage: "#1a1f22",
		bgText: "#252528",
		textColor: "#e3dbd5",
		accentColor: "#ba8366",
	},
	yellow: {
		bgImage: "#1a2122",
		bgText: "#242828",
		textColor: "#e1e2d6",
		accentColor: "#b29e59",
	},
	blue: {
		bgImage: "#122026",
		bgText: "#182730",
		textColor: "#ccddf0",
		accentColor: "#618bb3",
	},
	"sky-blue": {
		bgImage: "#122227",
		bgText: "#172b32",
		textColor: "#cae2e8",
		accentColor: "#529ea3",
	},
	pink: {
		bgImage: "#1a1d23",
		bgText: "#252229",
		textColor: "#e3d8e3",
		accentColor: "#c17a99",
	},
	gray: {
		bgImage: "#142022",
		bgText: "#1d292c",
		textColor: "#d0dbde",
		accentColor: "#798c92",
	},
};
