"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";

import { I18nProvider } from "next-i18next/client";
import { useRouter } from "next/navigation";

import { DEFAULT_LANGUAGE, LANGUAGE_QUERY_PARAM, NAMESPACE, SUPPORTED_LANGUAGES, isLanguage } from "@/constants/i18n";

import type { Language } from "@/constants/i18n";
import type { Resource } from "i18next";

interface LanguageContextValue {
	language: Language;
	setLanguage: (language: Language) => void;
}

const LanguageContext = createContext<LanguageContextValue>({
	language: DEFAULT_LANGUAGE,
	setLanguage: () => {},
});

export const useLanguageContext = () => useContext(LanguageContext);

const readLanguageFromLocation = (): Language => {
	const requested = new URLSearchParams(window.location.search).get(LANGUAGE_QUERY_PARAM);

	return isLanguage(requested) ? requested : DEFAULT_LANGUAGE;
};

interface Props {
	children: React.ReactNode;
	resources: Resource;
}

export default function LanguageProvider({ children, resources }: Props) {
	const router = useRouter();

	// Starts at the default language so the prerendered HTML and the first client render
	// agree, then the query param is applied on mount. Reading it with useSearchParams()
	// instead would bail the whole tree out of prerendering and ship an empty HTML shell.
	const [language, setLanguageState] = useState<Language>(DEFAULT_LANGUAGE);

	useEffect(() => {
		const sync = () => setLanguageState(readLanguageFromLocation());

		sync();

		window.addEventListener("popstate", sync);

		return () => window.removeEventListener("popstate", sync);
	}, []);

	// A static export bakes one <html lang> per route at build time, so it is re-applied here
	// whenever the language changes.
	useEffect(() => {
		document.documentElement.lang = language;
	}, [language]);

	const setLanguage = useCallback(
		(next: Language) => {
			setLanguageState(next);

			const params = new URLSearchParams(window.location.search);

			if (next === DEFAULT_LANGUAGE) params.delete(LANGUAGE_QUERY_PARAM);
			else params.set(LANGUAGE_QUERY_PARAM, next);

			const query = params.toString();

			router.push(query ? `${window.location.pathname}?${query}` : window.location.pathname, { scroll: false });
		},
		[router],
	);

	return (
		<LanguageContext.Provider value={{ language, setLanguage }}>
			<I18nProvider
				defaultNS={NAMESPACE}
				fallbackLng={DEFAULT_LANGUAGE}
				language={language}
				resources={resources}
				supportedLngs={[...SUPPORTED_LANGUAGES]}
			>
				{children}
			</I18nProvider>
		</LanguageContext.Provider>
	);
}
