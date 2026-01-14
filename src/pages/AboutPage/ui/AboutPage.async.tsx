import { lazy } from "react";

export const AboutPageAsync = lazy(
  () =>
    new Promise((resolve) => {
      // @ts-ignore
      // ТОЛЬКО ДЛЯ ИМИТАЦИИ ЗАГРУЗКИ
      setTimeout(() => resolve(import("./AboutPage")), 400);
    })
);
