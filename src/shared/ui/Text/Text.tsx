import { memo } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Text.module.scss";

export enum TextTheme {
  DEFAULT = "default",
  ERROR = "error",
}

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: TextTheme;
  bold?: boolean;
}

export const Text = memo(
  ({
    className,
    title,
    text,
    theme = TextTheme.DEFAULT,
    bold = false,
  }: TextProps) => {
    return (
      <div
        className={classNames(
          cls.textWrapper,
          { [cls[theme]]: true, [cls.bold]: bold },
          [className]
        )}
      >
        {title && <p className={cls.title}>{title}</p>}
        {text && <p className={cls.text}>{text}</p>}
      </div>
    );
  }
);
