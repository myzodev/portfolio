"use client";

import { useCallback } from "react";

import { useLanguageContext } from "@/providers/LanguageProvider";

import localizeHref from "@/utils/localize-href";

export const useLocalizedHref = () => {
	const { language } = useLanguageContext();

	return useCallback((href: string) => localizeHref(href, language), [language]);
};
