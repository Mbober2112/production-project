import { useTranslation } from "react-i18next";
import { Page } from "shared/ui/Page/Page";

const NotFoundPage = () => {
  const { t } = useTranslation();

  return <Page>{t("pageNotFound")}</Page>;
};

export default NotFoundPage;
