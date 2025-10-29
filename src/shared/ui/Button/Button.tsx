import { ButtonHTMLAttributes, FC } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Button.module.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

export const Button: FC<ButtonProps> = ({ className, children, ...props }) => {
  return (
    <button className={classNames(cls.button, {}, [className])} {...props}>
      {children}
    </button>
  );
};
