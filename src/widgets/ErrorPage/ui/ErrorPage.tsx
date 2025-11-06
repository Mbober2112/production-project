import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { Button, ThemeButton } from "shared/ui/Button/Button";
import cls from "./ErrorPage.module.scss";

interface ErrorPageProps {
  className?: string;
}

export const ErrorPage = ({ className }: ErrorPageProps) => {
  const { t } = useTranslation();

  const reloadPage = () => {
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  };

  return (
    <div className={classNames(cls.errorPage, {}, [className])}>
      <p>{t("somethingWentWrong")}</p>
      <Button theme={ThemeButton.CLEAR} onClick={reloadPage}>
        {t("reloadPage")}
      </Button>
    </div>
  );
};
