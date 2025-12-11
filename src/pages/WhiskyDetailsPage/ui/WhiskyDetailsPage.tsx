import { useTranslation } from "react-i18next";
import cls from "./WhiskyPage.module.scss";

const WhiskyDetailsPage = () => {
  const { t } = useTranslation("whisky");

  return <div>{t("whiskyDetails")}</div>;
};

export default WhiskyDetailsPage;
