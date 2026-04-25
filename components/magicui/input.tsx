import * as React from "react";

import { cn } from "@/utils/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
	return (
		<input
			type={type}
			data-slot="input"
			className={cn(
				"h-12 w-full min-w-0 bg-transparent px-0 py-2 text-base outline-none",
				"border-border border-b",

				"transition-colors duration-200",

				"focus-visible:border-primary",

				"aria-invalid:border-destructive",

				"placeholder:text-muted-foreground/50",
				"disabled:cursor-not-allowed disabled:opacity-50",
				"md:text-sm",
				className,
			)}
			{...props}
		/>
	);
}

export { Input };
