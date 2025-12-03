import { ButtonHTMLAttributes, FC } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Button.module.scss";

export enum ButtonTheme {
  CLEAR = "clear",
  NO_THEME = "noTheme",
}

export enum ButtonSize {
  M = "size_m",
  L = "size_l",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
  square?: boolean;
  size?: ButtonSize;
  disabled?: boolean;
}

export const Button: FC<ButtonProps> = ({
  className,
  children,
  theme = ButtonTheme.NO_THEME,
  square,
  size = ButtonSize.M,
  disabled,
  ...props
}) => {
  return (
    <button
      className={classNames(
        cls.button,
        {
          [cls[theme]]: Boolean(theme),
          [cls.square]: square,
          [cls[size]]: Boolean(size),
          [cls.disabled]: Boolean(disabled),
        },
        [className]
      )}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};
