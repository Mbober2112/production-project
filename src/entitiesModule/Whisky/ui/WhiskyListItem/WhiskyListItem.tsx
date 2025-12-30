import { classNames } from "shared/lib/classNames/classNames";
import cls from "./WhiskyListItem.module.scss";
import { memo, useCallback } from "react";
import { Whisky } from "entitiesModule/Whisky/model/types/whisky";
import { ListViewType } from "shared/const/common";
import { Text } from "shared/ui/Text/Text";
import { Card } from "shared/ui/Card/Card";
import { useNavigate } from "react-router-dom";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import { Avatar, AvatarSize } from "shared/ui/Avatar/Avatar";

interface WhiskyListItemProps {
  className?: string;
  viewType: ListViewType;
  whisky: Whisky;
}

export const WhiskyListItem = memo(
  ({ className, viewType, whisky }: WhiskyListItemProps) => {
    const navigate = useNavigate();

    const onCardClick = useCallback(() => {
      navigate(RoutePath.whisky_details + whisky.id);
    }, [navigate, whisky.id]);

    if (viewType === ListViewType.LIST) {
      return (
        <Card
          onClick={onCardClick}
          className={classNames(cls.whiskyListItemList, {}, [className])}
        >
          <Avatar
            className={cls.avatar}
            src={whisky.img}
            size={AvatarSize.MEDIUM}
          />
          <div className={cls.whiskyInfoWrapper}>
            <Text text={whisky.title} className={cls.title} />
            <Text small text={whisky.type} />
          </div>
        </Card>
      );
    }

    return (
      <Card
        onClick={onCardClick}
        className={classNames(cls.whiskyListItemBadge, {}, [className])}
      >
        <Avatar
          className={cls.avatar}
          src={whisky.img}
          size={AvatarSize.MEDIUM}
        />
        <Text text={whisky.title} className={cls.title} />
        <Text small text={whisky.type} />
      </Card>
    );
  }
);
