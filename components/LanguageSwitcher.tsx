"use client";

import { useT } from "next-i18next/client";

import clsx from "clsx";

import { useLanguageContext } from "@/providers/LanguageProvider";

import { SUPPORTED_LANGUAGES } from "@/constants/i18n";

export default function LanguageSwitcher({ isDark = false }: { isDark?: boolean }) {
	const { language, setLanguage } = useLanguageContext();

	const { t } = useT();

	return (
		<div className="relative z-50 flex items-center gap-1.5" aria-label={t("common.language.label")} role="group">
			{SUPPORTED_LANGUAGES.map((code, index) => {
				const isActive = code === language;

				return (
					<span key={code} className="flex items-center gap-1.5">
						{index > 0 && (
							<span className={clsx("text-xs", isDark ? "text-ink-black/25" : "text-powder-petal/25")} aria-hidden>
								/
							</span>
						)}

						<button
							className={clsx(
								"sans-sm cursor-pointer font-semibold uppercase transition-colors duration-500",
								isDark
									? isActive
										? "text-ink-black"
										: "text-ink-black/40 hover:text-ink-black"
									: isActive
										? "text-powder-petal"
										: "text-powder-petal/40 hover:text-powder-petal",
							)}
							aria-current={isActive ? "true" : undefined}
							aria-label={t(`common.language.switchTo.${code}`)}
							onClick={() => setLanguage(code)}
							type="button"
						>
							{t(`common.language.short.${code}`)}
						</button>
					</span>
				);
			})}
		</div>
	);
}
