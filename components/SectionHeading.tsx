type Props = {
	children: React.ReactNode;
	className?: string;
};

export default function SectionHeading({ children }: Props) {
	return <h3 className="text-xs font-bold uppercase md:text-sm">{children}</h3>;
}
