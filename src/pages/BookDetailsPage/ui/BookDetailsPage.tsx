import { useTranslation } from "react-i18next";
import { Page } from "shared/ui/Page/Page";
import cls from "./BookPage.module.scss";

const BookDetailsPage = () => {
  const { t } = useTranslation("book");

  return <Page>{t("bookDetails")}</Page>;
};

export default BookDetailsPage;
