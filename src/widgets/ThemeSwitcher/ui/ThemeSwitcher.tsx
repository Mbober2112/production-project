import { Theme, useTheme } from "app/providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./ThemeSwitcher.module.scss";
import DarkThemeIcon from "shared/assets/icons/dark-theme.svg";
import LightThemeIcon from "shared/assets/icons/light-theme.svg";
import { Button } from "shared/ui/Button/Button";

interface ThemeSwitcherProps {
  className?: string;
}

import { useTranslation } from "react-i18next";
import { memo } from "react";

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();
  const { t } = useTranslation();

  return (
    <Button
      className={classNames(cls.themeSwitcher, {}, [className])}
      onClick={toggleTheme}
    >
      {theme === Theme.DARK ? (
        <>
          <LightThemeIcon />
          {t("goLightTheme")}
        </>
      ) : (
        <>
          <DarkThemeIcon />
          {t("goDarkTheme")}
        </>
      )}
    </Button>
  );
});
