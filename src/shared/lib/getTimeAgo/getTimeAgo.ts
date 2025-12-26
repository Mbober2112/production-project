import { useTranslation } from "react-i18next";
import { TextPluralEn, TextPluralRu } from "../textPlural/textPlural";

const RU_FORMS: Record<string, [string, string, string]> = {
  ["minute"]: ["минута", "минуты", "минут"],
  ["hour"]: ["час", "часа", "часов"],
  ["day"]: ["день", "дня", "дней"],
  ["month"]: ["месяц", "месяца", "месяцев"],
  ["year"]: ["год", "года", "лет"],
};

const EN_FORMS: Record<string, [string, string]> = {
  ["minute"]: ["minute", "minutes"],
  ["hour"]: ["hour", "hours"],
  ["day"]: ["day", "days"],
  ["month"]: ["month", "months"],
  ["year"]: ["year", "years"],
};

export function getTimeAgo(date: number, locale = "ru"): string {
  const { t } = useTranslation();
  const now = Date.now();
  const diff = now - date;
  const minute = 60 * 1000;
  const hour = 60 * minute;
  const day = 24 * hour;
  const month = 30 * day;
  const year = 365 * day;

  if (diff < minute) {
    return t("now");
  }

  const format = (
    value: number,
    unit: "minute" | "hour" | "day" | "month" | "year"
  ) => {
    if (locale === "ru") {
      const word = TextPluralRu(value, RU_FORMS[unit]);
      return `${value} ${word} ${t("ago")}`;
    }

    const word = TextPluralEn(value, EN_FORMS[unit]);
    return `${value} ${word} ${t("ago")}`;
  };

  if (diff < hour) return format(Math.floor(diff / minute), "minute");
  if (diff < day) return format(Math.floor(diff / hour), "hour");
  if (diff < month) return format(Math.floor(diff / day), "day");
  if (diff < year) return format(Math.floor(diff / month), "month");

  return format(Math.floor(diff / year), "year");
}
