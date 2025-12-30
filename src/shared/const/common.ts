export type Unit = "minute" | "hour" | "day" | "month" | "year";

export const RU_AGE_FORMS: Record<Unit, [string, string, string]> = {
  ["minute"]: ["минута", "минуты", "минут"],
  ["hour"]: ["час", "часа", "часов"],
  ["day"]: ["день", "дня", "дней"],
  ["month"]: ["месяц", "месяца", "месяцев"],
  ["year"]: ["год", "года", "лет"],
};

export const EN_AGE_FORMS: Record<Unit, [string, string]> = {
  ["minute"]: ["minute", "minutes"],
  ["hour"]: ["hour", "hours"],
  ["day"]: ["day", "days"],
  ["month"]: ["month", "months"],
  ["year"]: ["year", "years"],
};

export enum ListViewType {
  LIST = "list",
  BADGE = "badge",
}
