import { DEFAULT_LANGUAGE, NAMESPACE, SUPPORTED_LANGUAGES } from "@/constants/i18n";

import type { I18nConfig } from "next-i18next/proxy";

const i18nConfig: I18nConfig = {
	supportedLngs: [...SUPPORTED_LANGUAGES],
	fallbackLng: DEFAULT_LANGUAGE,
	defaultNS: NAMESPACE,
	ns: [NAMESPACE],
	localeInPath: false,
};

export default i18nConfig;
