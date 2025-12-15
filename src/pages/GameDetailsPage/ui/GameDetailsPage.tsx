import { GameDetails } from "entitiesModule/Games";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import cls from "./GamePage.module.scss";

const GameDetailsPage = () => {
  const { t } = useTranslation("game");
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return <div>{t("whiskyNotFound")}</div>;
  }

  return <GameDetails id={id} />;
};

export default GameDetailsPage;
