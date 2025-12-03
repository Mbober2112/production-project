import { classNames } from "shared/lib/classNames/classNames";
import cls from "./ProfileMainCard.module.scss";
import { useTranslation } from "react-i18next";
import { memo } from "react";
import { Text } from "shared/ui/Text/Text";
import { useSelector } from "react-redux";
import { getProfileData } from "../../model/selectors/getProfileData/getProfileData";

interface ProfileMainCardProps {
  className?: string;
}

export const ProfileMainCard = memo(({ className }: ProfileMainCardProps) => {
  const { t } = useTranslation("profile");
  const profileData = useSelector(getProfileData);

  return (
    <div className={classNames(cls.profileMainCard, {}, [className])}>
      <Text title={t("profile")} />
      <div className={cls.stringWrapper}>
        <Text bold text={`${t("name")}:`} />
        <Text text={profileData?.firstname} />
      </div>
      <div className={cls.stringWrapper}>
        <Text bold text={`${t("lastname")}:`} />
        <Text text={profileData?.lastname} />
      </div>
    </div>
  );
});
