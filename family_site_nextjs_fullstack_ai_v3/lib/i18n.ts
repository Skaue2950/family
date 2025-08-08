
import en from "@/i18n/en.json";
import da from "@/i18n/da.json";

export type Locale = "en" | "da";

export function t(locale: Locale, key: keyof typeof en): string {
  const dict = locale === "da" ? (da as typeof en) : en;
  return dict[key] ?? key;
}
