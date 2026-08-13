import { DEFAULT_LANGUAGE, LANGUAGE_QUERY_PARAM } from "@/constants/i18n";

import type { Language } from "@/constants/i18n";

const localizeHref = (href: string, language: Language) => {
	if (language === DEFAULT_LANGUAGE || !href.startsWith("/")) return href;

	const [pathWithQuery, hash] = href.split("#");
	const [path, query] = pathWithQuery.split("?");

	const params = new URLSearchParams(query);

	params.set(LANGUAGE_QUERY_PARAM, language);

	return `${path}?${params.toString()}${hash ? `#${hash}` : ""}`;
};

export default localizeHref;
