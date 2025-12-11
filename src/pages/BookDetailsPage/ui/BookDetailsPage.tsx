import { useTranslation } from "react-i18next";
import cls from "./BookPage.module.scss";

const BookDetailsPage = () => {
  const { t } = useTranslation("book");

  return <div>{t("bookDetails")}</div>;
};

export default BookDetailsPage;
