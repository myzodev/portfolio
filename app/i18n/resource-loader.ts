import type { I18nConfig } from "next-i18next/proxy";

type ResourceLoader = NonNullable<I18nConfig["resourceLoader"]>;

const loadFromDisk: ResourceLoader = async (language) => {
	const { readFile } = await import("fs/promises");
	const { resolve } = await import("path");

	const file = resolve(process.cwd(), `app/i18n/locales/${language}.json`);

	return JSON.parse(await readFile(file, "utf-8"));
};

const loadFromBundle: ResourceLoader = (language) => import(`./locales/${language}.json`);

const resourceLoader = process.env.NODE_ENV === "development" ? loadFromDisk : loadFromBundle;

export default resourceLoader;
