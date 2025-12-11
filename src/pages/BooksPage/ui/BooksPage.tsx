import { useTranslation } from "react-i18next";
import cls from "./BooksPage.module.scss";

const BooksPage = () => {
  const { t } = useTranslation("books");

  return <div>{t("books")}</div>;
};

export default BooksPage;
