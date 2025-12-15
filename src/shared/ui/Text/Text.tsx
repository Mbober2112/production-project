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
  opacity?: boolean;
  small?: boolean;
  text?: string;
  theme?: TextTheme;
  title?: string;
}

export const Text = memo(
  ({
    align = TextAlign.LEFT,
    bold = false,
    className,
    opacity,
    small,
    text,
    theme = TextTheme.DEFAULT,
    title,
  }: TextProps) => {
    return (
      <div
        className={classNames(
          cls.textWrapper,
          { [cls.bold]: bold, [cls.small]: small, [cls.opacity]: opacity },
          [className, cls[theme], cls[align]]
        )}
      >
        {title && <p className={cls.title}>{title}</p>}
        {text && <p className={cls.text}>{text}</p>}
      </div>
    );
  }
);
