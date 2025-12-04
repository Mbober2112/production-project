import { classNames } from "shared/lib/classNames/classNames";
import cls from "./ProfileEditCard.module.scss";
import { useTranslation } from "react-i18next";
import { memo } from "react";
import { Text, TextAlign, TextTheme } from "shared/ui/Text/Text";
import { useSelector } from "react-redux";
import { getProfileData } from "../../model/selectors/getProfileData/getProfileData";
import { Input } from "shared/ui/Input/Input";
import { getProfileIsLoading } from "entitiesModule/Profile/model/selectors/getProfileIsLoading/getProfileIsLoading";
import { Loader } from "shared/ui/Loader/Loader";
import { getProfileError } from "entitiesModule/Profile/model/selectors/getProfileError/getProfileError";

interface ProfileEditCardProps {
  className?: string;
}

export const ProfileEditCard = memo(({ className }: ProfileEditCardProps) => {
  const { t } = useTranslation("profile");
  const profileData = useSelector(getProfileData);
  const isLoading = useSelector(getProfileIsLoading);
  const isError = useSelector(getProfileError);

  if (isLoading) {
    return (
      <div
        className={classNames(cls.profileEditCard, {}, [className, cls.noData])}
      >
        <Loader />
      </div>
    );
  }

  if (isError) {
    return (
      <div
        className={classNames(cls.profileEditCard, {}, [className, cls.noData])}
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
    <div className={classNames(cls.profileEditCard, {}, [className])}>
      <div className={cls.stringWrapper}>
        <Text bold text={`${t("name")}:`} />
        <Input className={cls.input} value={profileData?.firstname} />
      </div>
      <div className={cls.stringWrapper}>
        <Text bold text={`${t("lastname")}:`} />
        <Input className={cls.input} value={profileData?.lastname} />
      </div>
      <div className={cls.stringWrapper}>
        <Text bold text={`${t("country")}:`} />
        <Input className={cls.input} value={profileData?.country} />
      </div>
      <div className={cls.stringWrapper}>
        <Text bold text={`${t("city")}:`} />
        <Input className={cls.input} value={profileData?.city} />
      </div>
    </div>
  );
});
