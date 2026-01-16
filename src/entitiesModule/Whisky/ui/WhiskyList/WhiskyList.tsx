import { classNames } from "shared/lib/classNames/classNames";
import cls from "./WhiskyList.module.scss";
import { memo } from "react";
import { Whisky } from "entitiesModule/Whisky/model/types/whisky";
import { WhiskyListItem } from "../WhiskyListItem/WhiskyListItem";
import { ListViewType } from "shared/const/common";
import { Skeleton } from "shared/ui/Skeleton/Sceleton";

interface WhiskyListProps {
  whiskyList: Whisky[];
  className?: string;
  isLoading?: boolean;
  viewType?: ListViewType;
}

export const WhiskyList = memo(
  ({
    className,
    isLoading = true,
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
        {isLoading && (
          <>
            {viewType === ListViewType.LIST ? (
              <div
                className={classNames(cls.whiskyList, {}, [
                  className,
                  cls[viewType],
                ])}
              >
                {new Array(30).fill(0).map((el, index) => (
                  <Skeleton key={index} height={70} />
                ))}
              </div>
            ) : (
              <div
                className={classNames(cls.whiskyList, {}, [
                  className,
                  cls[viewType],
                ])}
              >
                {new Array(30).fill(0).map((el, index) => (
                  <Skeleton key={index} width={220} height={300} />
                ))}
              </div>
            )}
          </>
        )}
      </div>
    );
  }
);
