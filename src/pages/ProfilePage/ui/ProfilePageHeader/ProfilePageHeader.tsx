import { memo } from "react";
import { useTranslation } from "react-i18next";
import EditIcon from "shared/assets/icons/pencil-edit.svg";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import { classNames } from "shared/lib/classNames/classNames";
import { AppLink } from "shared/ui/AppLink/AppLink";
import { Text } from "shared/ui/Text/Text";
import cls from "./ProfilePageHeader.module.scss";

interface ProfilePageHeaderProps {
  className?: string;
  canEdit?: boolean;
}

const ProfilePageHeader = memo(
  ({ canEdit = false, className }: ProfilePageHeaderProps) => {
    const { t } = useTranslation("profile");

    return (
      <div className={classNames(cls.profilePageHeader, {}, [className])}>
        <Text title={t("profile")} />
        {canEdit && (
          <AppLink to={RoutePath.profile_edit}>
            <EditIcon className={cls.icon} />
          </AppLink>
        )}
      </div>
    );
  }
);

export default ProfilePageHeader;
