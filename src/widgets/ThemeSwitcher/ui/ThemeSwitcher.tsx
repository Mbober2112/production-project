import { Theme, useTheme } from "app/providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./ThemeSwitcher.module.scss";
import DarkThemeIcon from "shared/assets/icons/dark-theme.svg";
import LightThemeIcon from "shared/assets/icons/light-theme.svg";
import { Button } from "shared/ui/Button/Button";

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      className={classNames(cls.themeSwitcher, {}, [className])}
      onClick={toggleTheme}
    >
      {theme === Theme.DARK ? (
        <>
          <LightThemeIcon />
          Go light
        </>
      ) : (
        <>
          <DarkThemeIcon />
          Go dark
        </>
      )}
    </Button>
  );
};
