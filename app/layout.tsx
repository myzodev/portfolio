import { ReactLenis } from "lenis/react";
import { Toaster } from "react-hot-toast";

import LanguageProvider from "@/providers/LanguageProvider";

import PageTransition from "@/components/PageTransition";
import AppFooter from "@/components/layout/AppFooter";
import AppNavbar from "@/components/layout/AppNavbar";

import { Chillax, Synonym } from "@/assets/styles/fonts";

import { DEFAULT_LANGUAGE } from "@/constants/i18n";

import { getResources, getStaticT } from "./i18n/server";

import type { Metadata } from "next";

import "../assets/css/app.css";

export const metadata: Metadata = {
	metadataBase: new URL("https://michalvalo.dev"),
	openGraph: {
		images: "/images/opengraph-image.jpg",
	},
	alternates: {
		canonical: "https://michalvalo.dev",
		languages: {
			en: "?lang=en",
		},
	},
};

export default async function RootLayout({ children }: LayoutProps<"/">) {
	const { i18n } = await getStaticT();

	const resources = getResources(i18n);

	return (
		<html lang={DEFAULT_LANGUAGE} className={`${Synonym.variable} ${Chillax.variable}`}>
			<body>
				<LanguageProvider resources={resources}>
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
				</LanguageProvider>
			</body>
		</html>
	);
}
