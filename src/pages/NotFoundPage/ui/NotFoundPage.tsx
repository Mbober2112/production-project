import { useTranslation } from "react-i18next";

const NotFoundPage = () => {
  const { t } = useTranslation();

  return <div>{t("pageNotFound")}</div>;
};

export default NotFoundPage;
