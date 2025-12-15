import { memo } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import DefaultAvatar from "shared/assets/icons/user.jpg";
import cls from "./Avatar.module.scss";

export enum AvatarSize {
  SMALL = "small",
  MEDIUM = "medium",
  LARGE = "large",
}

interface AvatarProps {
  className?: string;
  size?: AvatarSize;
  src?: string;
  
}

export const Avatar = memo(
  ({
    className,
    size = AvatarSize.MEDIUM,
    src = DefaultAvatar,
  }: AvatarProps) => {
    return (
      <img
        className={classNames(cls.avatar, { [cls[size]]: size }, [className])}
        src={src}
      />
    );
  }
);
