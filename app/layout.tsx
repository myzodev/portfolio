import { cn } from "@/utils/utils";

import AppFooter from "@/components/layout/AppFooter";
import AppNavbar from "@/components/layout/AppNavbar";

import { ClashDisplay, Nunito } from "@/assets/styles/fonts";

import "@/assets/css/app.css";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const fontClasses = cn(ClashDisplay.variable, Nunito.variable);

	return (
		<html lang="en" className={fontClasses}>
			<body>
				<AppNavbar />

				<main>{children}</main>

				<AppFooter />
			</body>
		</html>
	);
}
