import { getResources, getT, initServerI18next } from "next-i18next/server";

import { DEFAULT_LANGUAGE } from "@/constants/i18n";
import i18nConfig from "@/i18n.config";

import resourceLoader from "./resource-loader";

initServerI18next({
	...i18nConfig,
	resourceLoader,
	reloadOnPrerender: process.env.NODE_ENV === "development",
});

export const getStaticT = () => getT(undefined, { lng: DEFAULT_LANGUAGE });

export { getResources };
