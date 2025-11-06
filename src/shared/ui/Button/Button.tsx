import { ButtonHTMLAttributes, FC } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Button.module.scss";

export enum ThemeButton {
  CLEAR = "clear",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
}

export const Button: FC<ButtonProps> = ({
  className,
  children,
  theme,
  ...props
}) => {
  return (
    <button
      className={classNames(cls.button, { [cls[theme]]: Boolean(theme) }, [
        className,
      ])}
      {...props}
    >
      {children}
    </button>
  );
};
