import { useState } from "react";
import { useTranslation } from "react-i18next";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import { classNames } from "shared/lib/classNames/classNames";
import { AppLink } from "shared/ui/AppLink/AppLink";
import { Button, ButtonSize } from "shared/ui/Button/Button";
import AboutIcon from "shared/assets/icons/about-page-icon.svg";
import MainIcon from "shared/assets/icons/home-page-icon.svg";
import cls from "./Sidebar.module.scss";

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const { t } = useTranslation();

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div
      data-testid="sidebar"
      className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [
        className,
      ])}
    >
      <Button
        data-testid="sidebar-toggle"
        className={classNames(cls.collapseButton)}
        onClick={onToggle}
        square
        size={ButtonSize.L}
      >
        {collapsed ? ">" : "<"}
      </Button>
      <div className={classNames(cls.pages)}>
        <AppLink to={RoutePath.main} className={classNames(cls.page)}>
          <MainIcon className={classNames(cls.icon)} />
          <span className={classNames(cls.link)}>{t("main")}</span>
        </AppLink>
        <AppLink to={RoutePath.about} className={classNames(cls.page)}>
          <AboutIcon className={classNames(cls.icon)} />
          <span className={classNames(cls.link)}>{t("about")}</span>
        </AppLink>
      </div>
    </div>
  );
};
