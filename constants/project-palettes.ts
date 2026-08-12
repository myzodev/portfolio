import type { ProjectColor, ProjectPalette } from "@/types/project";

export const PROJECT_PALETTES: Record<ProjectColor, ProjectPalette> = {
	green: { bgImage: "#1B281F", bgText: "#27382D", textColor: "#D8EFE6", accentColor: "#79C895" },
	"lime-green": { bgImage: "#22281B", bgText: "#303827", textColor: "#E0EEE0", accentColor: "#A0C470" },
	red: { bgImage: "#281C1B", bgText: "#382927", textColor: "#E9E2E0", accentColor: "#CB8B81" },
	orange: { bgImage: "#281F1B", bgText: "#382D27", textColor: "#EAE4DE", accentColor: "#C79377" },
	yellow: { bgImage: "#28251B", bgText: "#383427", textColor: "#E7EBDE", accentColor: "#C2AE6B" },
	blue: { bgImage: "#1B2128", bgText: "#272F38", textColor: "#D7E7F0", accentColor: "#759CC6" },
	"sky-blue": { bgImage: "#1B2628", bgText: "#273538", textColor: "#D3EAEE", accentColor: "#67B2C1" },
	pink: { bgImage: "#281B20", bgText: "#38272E", textColor: "#E9E1E9", accentColor: "#D08DAB" },
	gray: { bgImage: "#1F2223", bgText: "#2D3032", textColor: "#DDE7E9", accentColor: "#8FA0A6" },
};
