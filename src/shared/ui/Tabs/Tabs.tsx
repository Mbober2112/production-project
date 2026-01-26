import { classNames } from "shared/lib/classNames/classNames";
import { memo, ReactNode, useCallback } from "react";
import cls from "./Tabs.module.scss";

export interface TabItem {
  value: string;
  content: ReactNode;
}

interface TabsProps {
  className?: string;
  tabs: TabItem[];
  value: string;
  placeholder?: string;
  onTabClick: (tab: TabItem) => void;
}

export const Tabs = memo(
  ({ className, tabs, onTabClick, value }: TabsProps) => {
    const clickHandle = useCallback(
      (tab: TabItem) => () => {
        onTabClick(tab);
      },
      [onTabClick],
    );

    return (
      <div className={classNames(cls.tabs, {}, [className])}>
        {tabs.map((tab) => (
          <div
            className={classNames(
              cls.tab,
              { [cls.selected]: tab.value === value },
              [],
            )}
            key={tab.value}
            onClick={clickHandle(tab)}
          >
            {tab.content}
          </div>
        ))}
      </div>
    );
  },
);
