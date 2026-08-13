import { ReactLenis } from "lenis/react";
import { Toaster } from "react-hot-toast";

import PageTransition from "@/components/PageTransition";
import AppFooter from "@/components/layout/AppFooter";
import AppNavbar from "@/components/layout/AppNavbar";

import { Chillax, Synonym } from "@/assets/styles/fonts";

import type { Metadata } from "next";

import "../assets/css/app.css";

export const metadata: Metadata = {
	metadataBase: new URL("https://michalvalo.dev"),
	openGraph: {
		images: "/images/opengraph-image.jpg",
	},
};

export default function RootLayout({ children }: LayoutProps<"/">) {
	return (
		<html lang="en" className={`${Synonym.variable} ${Chillax.variable}`}>
			<body>
				<ReactLenis options={{ duration: 1 }} root />

				<PageTransition />

				<AppNavbar />

				<main>{children}</main>

				<AppFooter />

				<Toaster
					position="top-center"
					toastOptions={{
						className: "sans-sm font-semibold",
						style: {
							background: "var(--color-ink-black)",
							color: "var(--color-powder-petal)",
							border: "1px solid color-mix(in oklab, var(--color-powder-petal) 15%, transparent)",
							borderRadius: "9999px",
							maxWidth: "32rem",
						},
						iconTheme: {
							primary: "var(--color-peach)",
							secondary: "var(--color-ink-black)",
						},
					}}
				/>
			</body>
		</html>
	);
}
