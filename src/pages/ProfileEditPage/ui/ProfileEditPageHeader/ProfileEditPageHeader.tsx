import { memo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { Text } from "shared/ui/Text/Text";
import cls from "./ProfileEditPageHeader.module.scss";

interface ProfileEditPageHeaderProps {
  className?: string;
}

const ProfileEditPageHeader = memo(
  ({ className }: ProfileEditPageHeaderProps) => {
    const { t } = useTranslation("profile");

    return (
      <div className={classNames(cls.profileEditPageHeader, {}, [className])}>
        <Text title={t("profileEditing")} />
      </div>
    );
  }
);

export default ProfileEditPageHeader;
