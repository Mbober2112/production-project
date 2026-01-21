import { classNames } from "shared/lib/classNames/classNames";
import cls from "./WhiskyListItem.module.scss";
import { memo, useCallback } from "react";
import { Whisky } from "entitiesModule/Whisky/model/types/whisky";
import {
  EN_RATE_FORMS,
  ListViewType,
  RU_RATE_FORMS,
} from "shared/const/common";
import { Text } from "shared/ui/Text/Text";
import { Card } from "shared/ui/Card/Card";
import { useNavigate } from "react-router-dom";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import { Avatar, AvatarSize } from "shared/ui/Avatar/Avatar";
import { TextPluralEn, TextPluralRu } from "shared/lib/textPlural/textPlural";
import { useTranslation } from "react-i18next";

interface WhiskyListItemProps {
  className?: string;
  viewType: ListViewType;
  whisky: Whisky;
}

export const WhiskyListItem = memo(
  ({ className, viewType, whisky }: WhiskyListItemProps) => {
    const navigate = useNavigate();
    const { i18n } = useTranslation();

    const onCardClick = useCallback(() => {
      navigate(RoutePath.whisky_details + whisky.id);
    }, [navigate, whisky.id]);

    if (viewType === ListViewType.LIST) {
      return (
        <Card
          onClick={onCardClick}
          className={classNames(cls.whiskyListItemList, {}, [className])}
        >
          <div className={cls.mainInfo}>
            <Avatar
              className={cls.avatar}
              src={whisky.img}
              size={AvatarSize.MEDIUM}
            />
            <div className={cls.whiskyInfoWrapper}>
              <Text text={whisky.title} className={cls.title} />
              <Text small text={whisky.type} />
            </div>
          </div>
          <div className={cls.raiting}>
            <Text text={`${String(whisky.rating?.avg || "-")}/100`} />
            <Text
              opacity
              small
              text={`${whisky?.rating?.count || 0}  ${
                i18n.language === "ru"
                  ? TextPluralRu(whisky?.rating?.count || 0, RU_RATE_FORMS)
                  : TextPluralEn(whisky?.rating?.count || 0, EN_RATE_FORMS)
              }`}
            />
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
        <Text text={`${String(whisky.rating?.avg || "-")}/100`} />
        <Text
          opacity
          small
          text={`${whisky?.rating?.count || 0}  ${
            i18n.language === "ru"
              ? TextPluralRu(whisky?.rating?.count || 0, RU_RATE_FORMS)
              : TextPluralEn(whisky?.rating?.count || 0, EN_RATE_FORMS)
          }`}
        />
      </Card>
    );
  }
);
