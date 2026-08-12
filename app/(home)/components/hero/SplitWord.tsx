export default function SplitWord({ children }: { children: React.ReactNode }) {
	return (
		<span className="inline-block overflow-hidden align-top">
			<span className="hero-word inline-block">{children}</span>
		</span>
	);
}
