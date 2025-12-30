import { classNames } from "shared/lib/classNames/classNames";
import cls from "./WhiskyList.module.scss";
import { memo } from "react";
import { Whisky } from "entitiesModule/Whisky/model/types/whisky";
import { WhiskyListItem } from "../WhiskyListItem/WhiskyListItem";
import { ListViewType } from "shared/const/common";

interface WhiskyListProps {
  whiskyList: Whisky[];
  className?: string;
  viewType?: ListViewType;
}

export const WhiskyList = memo(
  ({
    className,
    viewType = ListViewType.LIST,
    whiskyList,
  }: WhiskyListProps) => {
    return (
      <div
        className={classNames(cls.whiskyList, {}, [className, cls[viewType]])}
      >
        {whiskyList.map((whisky) => (
          <WhiskyListItem key={whisky.id} viewType={viewType} whisky={whisky} />
        ))}
      </div>
    );
  }
);
