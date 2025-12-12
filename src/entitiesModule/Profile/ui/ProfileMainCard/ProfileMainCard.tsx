import { classNames } from "shared/lib/classNames/classNames";
import cls from "./ProfileMainCard.module.scss";
import { useTranslation } from "react-i18next";
import { memo } from "react";
import { Text, TextAlign, TextTheme } from "shared/ui/Text/Text";
import { useSelector } from "react-redux";
import { getAge } from "shared/lib/getAge/getAge";
import { Avatar, AvatarSize } from "shared/ui/Avatar/Avatar";
import {
  getProfileData,
  getProfileError,
  getProfileIsLoading,
} from "../../model/selectors/profileSelectors";
import { Skeleton } from "shared/ui/Skeleton/Sceleton";

interface ProfileMainCardProps {
  className?: string;
}

export const ProfileMainCard = memo(({ className }: ProfileMainCardProps) => {
  const { t } = useTranslation("profile");
  const profileData = useSelector(getProfileData);
  const isLoading = useSelector(getProfileIsLoading);
  const isError = useSelector(getProfileError);
  const age = profileData?.dateOfBirth
    ? `${getAge(profileData?.dateOfBirth)}`
    : "";

  if (isLoading) {
    return (
      <div className={classNames(cls.profileMainCard, {}, [className])}>
        <div className={cls.mainInfoWrapper}>
          <Skeleton width={"250px"} height={"250px"} border={"20%"} />
          <div className={cls.mainInfo}>
            <Skeleton
              className={cls.lastname}
              height={"64px"}
              width={"300px"}
            />
            <Skeleton height={"96px"} width={"350px"} />
          </div>
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div
        className={classNames(cls.profileMainCard, {}, [className, cls.noData])}
      >
        <Text
          title={t("fetchProfileDataError")}
          theme={TextTheme.ERROR}
          align={TextAlign.CENTER}
        />
        <Text
          text={t("tryToReloadPage")}
          theme={TextTheme.ERROR}
          align={TextAlign.CENTER}
        />
      </div>
    );
  }

  return (
    <div className={classNames(cls.profileMainCard, {}, [className])}>
      <div className={cls.mainInfoWrapper}>
        <Avatar size={AvatarSize.LARGE} src={profileData?.avatar} />
        <div className={cls.mainInfo}>
          <div className={cls.field}>
            <Text bold title={`${t("name")}:`} />
            <Text title={profileData?.firstname} />
          </div>
          <div className={classNames(cls.field, {}, [cls.lastname])}>
            <Text bold title={`${t("lastname")}:`} />
            <Text title={profileData?.lastname} />
          </div>
          <div className={cls.field}>
            <Text bold text={`${t("country")}:`} />
            <Text text={t(profileData?.country || "")} />
          </div>
          <div className={cls.field}>
            <Text bold text={`${t("city")}:`} />
            <Text text={profileData?.city} />
          </div>
          <div className={cls.field}>
            <Text bold text={`${t("sex")}:`} />
            <Text text={t(profileData?.sex || "")} />
          </div>
          <div className={cls.field}>
            <Text bold text={`${t("age")}:`} />
            <Text text={age} />
          </div>
        </div>
      </div>
    </div>
  );
});
