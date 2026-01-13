import { classNames } from "shared/lib/classNames/classNames";
import cls from "./LangSwitcher.module.scss";
import { useTranslation } from "react-i18next";
import { memo } from "react";
import { Language } from "shared/const/common";
import { Select } from "shared/ui/Select/Select";

interface LangSwitcherProps {
  className?: string;
}

export const LangSwitcher = memo(({ className }: LangSwitcherProps) => {
  const { t, i18n } = useTranslation();

  const options = [
    { value: Language.EN, content: t(Language.EN) },
    { value: Language.RU, content: t(Language.RU) },
  ];

  const onChangeHandler = (value: string) =>
    i18n.changeLanguage(value as Language);

  return (
    <Select
      className={classNames("", {}, [className])}
      options={options}
      placeholder={t("language")}
      value={i18n.language}
      onChange={onChangeHandler}
    />
  );
});
