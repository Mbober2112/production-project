import { useTranslation } from "react-i18next";
import cls from "./GamePage.module.scss";

const GameDetailsPage = () => {
  const { t } = useTranslation("game");

  return <div>{t("gameDetails")}</div>;
};

export default GameDetailsPage;
