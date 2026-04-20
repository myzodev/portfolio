import { cn } from "@/utils/utils";

type Props = {
	children: React.ReactNode;
	className?: string;
};

export default function SectionHeading({ children, className }: Props) {
	return <h3 className={cn("text-xs font-bold uppercase md:text-sm", className)}>{children}</h3>;
}
