import { useTranslation } from "react-i18next";
import { EN_AGE_FORMS, RU_AGE_FORMS, Unit } from "shared/const/common";
import { TextPluralEn, TextPluralRu } from "../textPlural/textPlural";

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

  const format = (value: number, unit: Unit) => {
    if (locale === "ru") {
      const word = TextPluralRu(value, RU_AGE_FORMS[unit]);
      return `${value} ${word} ${t("ago")}`;
    }

    const word = TextPluralEn(value, EN_AGE_FORMS[unit]);
    return `${value} ${word} ${t("ago")}`;
  };

  if (diff < hour) return format(Math.floor(diff / minute), "minute");
  if (diff < day) return format(Math.floor(diff / hour), "hour");
  if (diff < month) return format(Math.floor(diff / day), "day");
  if (diff < year) return format(Math.floor(diff / month), "month");

  return format(Math.floor(diff / year), "year");
}
