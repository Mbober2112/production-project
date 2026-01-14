import { lazy } from "react";

export const BookDetailsPageAsync = lazy(
  () =>
    new Promise((resolve) => {
      // @ts-ignore
      // ТОЛЬКО ДЛЯ ИМИТАЦИИ ЗАГРУЗКИ
      setTimeout(() => resolve(import("./BookDetailsPage")), 400);
    })
);
