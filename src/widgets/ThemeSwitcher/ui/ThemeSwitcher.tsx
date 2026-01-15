import { Theme, useTheme } from "app/providers/ThemeProvider";
import cls from "./ThemeSwitcher.module.scss";
import { useTranslation } from "react-i18next";
import { memo } from "react";
import { Switcher } from "shared/ui/Switcher/Switcher";

interface ThemeSwitcherProps {
  className?: string;
}

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
