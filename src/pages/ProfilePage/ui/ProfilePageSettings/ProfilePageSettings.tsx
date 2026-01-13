import { getProfileIsLoading } from "entitiesModule/Profile/model/selectors/profileSelectors";
import { memo } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { classNames } from "shared/lib/classNames/classNames";
import { Skeleton } from "shared/ui/Skeleton/Sceleton";
import { Text, TextAlign } from "shared/ui/Text/Text";
import { LangSwitcher } from "widgets/LangSwitcher";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import cls from "./ProfilePageSettings.module.scss";

interface ProfilePageSettingsProps {
  className?: string;
}

const ProfilePageSettings = memo(({ className }: ProfilePageSettingsProps) => {
  const { t } = useTranslation("profile");
  const isProfileLoading = useSelector(getProfileIsLoading);

  if (isProfileLoading) {
    return (
      <div className={classNames(cls.profilePageSettings, {}, [className])}>
        <Text
          className={cls.title}
          title={t("settings")}
          align={TextAlign.CENTER}
        />
        <Skeleton height={50} />
        <Skeleton width={300} height={24} />
      </div>
    );
  }

  return (
    <div className={classNames(cls.profilePageSettings, {}, [className])}>
      <Text
        className={cls.title}
        title={t("settings")}
        align={TextAlign.CENTER}
      />
      <LangSwitcher />
      <ThemeSwitcher />
    </div>
  );
});

export default ProfilePageSettings;
