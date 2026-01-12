import { Theme, useTheme } from "app/providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./ThemeSwitcher.module.scss";

interface ThemeSwitcherProps {
  className?: string;
}

import { useTranslation } from "react-i18next";
import { memo } from "react";
import { Switcher } from "shared/ui/Switcher/Switcher";

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();
  const { t } = useTranslation();

  return (
    <Switcher
      checked={theme === Theme.DARK}
      onChange={toggleTheme}
      label={t("goDarkTheme")}
    />
  );
});
