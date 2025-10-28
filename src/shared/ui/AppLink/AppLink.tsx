import { FC } from "react";
import { Link, LinkProps } from "react-router-dom";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./AppLink.module.scss";

interface AppLinkProps extends LinkProps {
  className?: string;
  to: string;
}

export const AppLink: FC<AppLinkProps> = ({ className, to, children }) => {
  return (
    <Link className={classNames(cls.link, {}, [className])} to={to}>
      {children}
    </Link>
  );
};
