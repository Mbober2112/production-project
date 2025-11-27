import { memo, useState } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { Button, ButtonSize } from "shared/ui/Button/Button";
import cls from "./Sidebar.module.scss";
import { SidebarItemsList } from "../model/items";
import { SidebarItem } from "./SidebarItem/SidebarItem";

interface SidebarProps {
  className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);

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
        {SidebarItemsList.map((item) => (
          <SidebarItem item={item} key={item.path} collapsed={collapsed} />
        ))}
      </div>
    </div>
  );
});
