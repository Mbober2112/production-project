import { memo } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Text.module.scss";

export enum TextTheme {
  DEFAULT = "default",
  ERROR = "error",
}

export enum TextAlign {
  LEFT = "left",
  RIGHT = "right",
  CENTER = "center",
}

interface TextProps {
  align?: TextAlign;
  bold?: boolean;
  className?: string;
  text?: string;
  theme?: TextTheme;
  title?: string;
}

export const Text = memo(
  ({
    align = TextAlign.LEFT,
    bold = false,
    className,
    text,
    theme = TextTheme.DEFAULT,
    title,
  }: TextProps) => {
    return (
      <div
        className={classNames(cls.textWrapper, { [cls.bold]: bold }, [
          className,
          cls[theme],
          cls[align],
        ])}
      >
        {title && <p className={cls.title}>{title}</p>}
        {text && <p className={cls.text}>{text}</p>}
      </div>
    );
  }
);
