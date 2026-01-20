import { useTranslation } from "react-i18next";
import { Page } from "widgets/Page/Page";
import cls from "./BooksPage.module.scss";

const BooksPage = () => {
  const { t } = useTranslation("books");

  return <Page>{t("books")}</Page>;
};

export default BooksPage;
