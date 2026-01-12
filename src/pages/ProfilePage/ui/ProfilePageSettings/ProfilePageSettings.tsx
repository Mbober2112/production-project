import { memo } from "react";
import { useTranslation } from "react-i18next";
import EditIcon from "shared/assets/icons/pencil-edit.svg";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import { classNames } from "shared/lib/classNames/classNames";
import { AppLink } from "shared/ui/AppLink/AppLink";
import { Icon } from "shared/ui/Icon/Icon";
import { Text, TextAlign } from "shared/ui/Text/Text";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import cls from "./ProfilePageSettings.module.scss";

interface ProfilePageSettingsProps {
  className?: string;
}

const ProfilePageSettings = memo(({ className }: ProfilePageSettingsProps) => {
  const { t } = useTranslation("profile");

  return (
    <div className={classNames(cls.profilePageSettings, {}, [className])}>
      <Text
        className={cls.title}
        title={t("settings")}
        align={TextAlign.CENTER}
      />
      <ThemeSwitcher />
    </div>
  );
});

export default ProfilePageSettings;
