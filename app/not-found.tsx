import { AuroraText } from "@/components/ui/aurora-text";

export default function NotFound() {
	return (
		<section>
			<div className="container">
				<div className="flex items-center justify-center">
					<h1 className="text-2xl font-bold">
						<AuroraText>404</AuroraText>
						Page Not Found
					</h1>
				</div>
			</div>
		</section>
	);
}
