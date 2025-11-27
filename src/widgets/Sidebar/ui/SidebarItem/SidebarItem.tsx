import { memo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { AppLink } from "shared/ui/AppLink/AppLink";
import { SidebarItemType } from "widgets/Sidebar/model/items";
import cls from "./SidebarItem.module.scss";

interface SidebarItemProps {
  item: SidebarItemType;
  collapsed?: boolean;
}

export const SidebarItem = memo(({ item, collapsed }: SidebarItemProps) => {
  const { t } = useTranslation();

  return (
    <AppLink
      to={item.path}
      className={classNames(cls.page, { [cls.collapsed]: collapsed })}
    >
      <item.Icon className={classNames(cls.icon)} />
      <span className={classNames(cls.link)}>{t(item.text)}</span>
    </AppLink>
  );
});
