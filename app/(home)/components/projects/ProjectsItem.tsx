export default function ProjectsItem() {
	return (
		<li className="border-border bg-background rounded-lg border p-6 pb-4">
			<figure className="mb-4 overflow-hidden rounded-md">
				<img className="w-full" src="https://placehold.co/600x600" alt="" />
			</figure>

			<footer className="flex items-center justify-between">
				<h2 className="text-lg uppercase md:text-xl">Project Name</h2>
				<small className="text-muted-foreground text-xs md:text-sm">Development & Design</small>
			</footer>
		</li>
	);
}
