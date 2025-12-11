import { useTranslation } from "react-i18next";
import cls from "./GamesPage.module.scss";

const GamesPage = () => {
  const { t } = useTranslation("games");

  return <div>{t("games")}</div>;
};

export default GamesPage;
