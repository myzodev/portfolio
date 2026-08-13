export const LANGUAGE_QUERY_PARAM = "lang";

export const DEFAULT_LANGUAGE = "sk";

export const SUPPORTED_LANGUAGES = ["sk", "en"] as const;

export const NAMESPACE = "translation";

export type Language = (typeof SUPPORTED_LANGUAGES)[number];

export const isLanguage = (value: string | null | undefined): value is Language =>
	Boolean(value) && SUPPORTED_LANGUAGES.includes(value as Language);
