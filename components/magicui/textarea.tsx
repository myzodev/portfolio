import * as React from "react";

import { cn } from "@/utils/utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
	return (
		<textarea
			data-slot="textarea"
			className={cn(
				"flex field-sizing-content min-h-10 w-full resize-none bg-transparent px-0 py-2 text-base outline-none",
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

export { Textarea };
