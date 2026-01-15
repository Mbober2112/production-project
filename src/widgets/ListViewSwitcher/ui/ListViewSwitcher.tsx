import cls from "./ListViewSwitcher.module.scss";
import { memo } from "react";
import { ListViewType } from "shared/const/common";
import { classNames } from "shared/lib/classNames/classNames";
import ListViewIcon from "shared/assets/icons/list-icon.svg";
import BadgeViewIcon from "shared/assets/icons/badge-icon.svg";

interface ListViewSwitcherProps {
  className?: string;
  onViewChange: (view: ListViewType) => void;
  view: ListViewType;
}

export const ListViewSwitcher = memo(
  ({ className, view, onViewChange }: ListViewSwitcherProps) => {
    return (
      <div className={classNames(cls.listViewSwitcher, {}, [className])}>
        <div
          className={cls.iconWrapper}
          onClick={() => onViewChange(ListViewType.LIST)}
        >
          <ListViewIcon
            className={classNames(
              cls.icon,
              { [cls.selected]: view === ListViewType.LIST },
              [className]
            )}
          />
        </div>
        <div
          className={cls.iconWrapper}
          onClick={() => onViewChange(ListViewType.BADGE)}
        >
          <BadgeViewIcon
            className={classNames(
              cls.icon,
              { [cls.selected]: view === ListViewType.BADGE },
              [className]
            )}
          />
        </div>
      </div>
    );
  }
);
