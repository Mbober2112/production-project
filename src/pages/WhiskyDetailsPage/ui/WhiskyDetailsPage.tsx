import { WhiskyDetails } from "entitiesModule/Whisky";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import cls from "./WhiskyPage.module.scss";

const WhiskyDetailsPage = () => {
  const { t } = useTranslation("whisky");
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return <div>{t("whiskyNotFound")}</div>;
  }

  return <WhiskyDetails id={id} />;
};

export default WhiskyDetailsPage;
