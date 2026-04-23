import { cn } from "@/utils/utils";

type Props = {
	children: React.ReactNode;
	className?: string;
};

export default function SectionHeading({ children, className }: Props) {
	return <h3 className={cn("text-sm font-bold tracking-widest uppercase", className)}>{children}</h3>;
}
