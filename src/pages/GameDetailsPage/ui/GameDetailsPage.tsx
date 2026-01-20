import { GameDetails } from "entitiesModule/Games";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { Page } from "widgets/Page/Page";
import cls from "./GamePage.module.scss";

const GameDetailsPage = () => {
  const { t } = useTranslation("game");
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return <Page>{t("whiskyNotFound")}</Page>;
  }

  return (
    <Page>
      <GameDetails id={id} />
    </Page>
  );
};

export default GameDetailsPage;
