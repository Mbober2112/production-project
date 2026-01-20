import { useTranslation } from "react-i18next";
import { Page } from "widgets/Page/Page";
import cls from "./GamesPage.module.scss";

const GamesPage = () => {
  const { t } = useTranslation("games");

  return <Page>{t("games")}</Page>;
};

export default GamesPage;
