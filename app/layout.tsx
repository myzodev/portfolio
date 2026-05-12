import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";

import { cn } from "@/utils/utils";

import AppFooter from "@/components/layout/AppFooter";
import AppNavbar from "@/components/layout/AppNavbar";
import { Toaster } from "@/components/magicui/sonner";
import CursorDot from "@/components/ui/CursorDot";

import { ClashDisplay, Nunito } from "@/assets/styles/fonts";

import "@/assets/css/app.css";
import "lenis/dist/lenis.css";

export const metadata: Metadata = {
	metadataBase: new URL("https://michalvalo.dev"),
	openGraph: {
		images: "/images/opengraph-image.png",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const fontClasses = cn(ClashDisplay.variable, Nunito.variable);

	return (
		<html lang="en" className={fontClasses} suppressHydrationWarning>
			<body>
				<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
					<Toaster />
					<CursorDot />

					<AppNavbar />

					{children}

					<AppFooter />
				</ThemeProvider>
			</body>
		</html>
	);
}
