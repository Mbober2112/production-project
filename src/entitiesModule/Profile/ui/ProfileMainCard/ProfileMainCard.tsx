import { classNames } from "shared/lib/classNames/classNames";
import cls from "./ProfileMainCard.module.scss";
import { useTranslation } from "react-i18next";
import { memo } from "react";
import { Text, TextAlign, TextTheme } from "shared/ui/Text/Text";
import { useSelector } from "react-redux";
import { getProfileData } from "../../model/selectors/getProfileData/getProfileData";
import { getProfileIsLoading } from "../../model/selectors/getProfileIsLoading/getProfileIsLoading";
import { Loader } from "shared/ui/Loader/Loader";
import { getProfileError } from "entitiesModule/Profile/model/selectors/getProfileError/getProfileError";
import { getAge } from "shared/lib/getAge/getAge";
import { Avatar, AvatarSize } from "shared/ui/Avatar/Avatar";

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
      <div
        className={classNames(cls.profileMainCard, {}, [className, cls.noData])}
      >
        <Loader />
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
      <Avatar size={AvatarSize.LARGE} src={profileData?.avatar} />
      <div className={cls.field}>
        <Text bold text={`${t("name")}:`} />
        <Text text={profileData?.firstname} />
      </div>
      <div className={cls.field}>
        <Text bold text={`${t("lastname")}:`} />
        <Text text={profileData?.lastname} />
      </div>
      <div className={cls.field}>
        <Text bold text={`${t("country")}:`} />
        <Text text={profileData?.country} />
      </div>
      <div className={cls.field}>
        <Text bold text={`${t("city")}:`} />
        <Text text={profileData?.city} />
      </div>
      <div className={cls.field}>
        <Text bold text={`${t("age")}:`} />
        <Text text={age} />
      </div>
    </div>
  );
});
