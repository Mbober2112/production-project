import { useTranslation } from "react-i18next";
import cls from "./WhiskyPage.module.scss";

const WhiskyPage = () => {
  const { t } = useTranslation("whisky");

  return <div>{t("whisky")}</div>;
};

export default WhiskyPage;
