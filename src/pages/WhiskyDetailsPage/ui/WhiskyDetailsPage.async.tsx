import { lazy } from "react";

export const WhiskyDetailsPageAsync = lazy(
  () =>
    new Promise((resolve) => {
      // @ts-ignore
      // ТОЛЬКО ДЛЯ ИМИТАЦИИ ЗАГРУЗКИ
      setTimeout(() => resolve(import("./WhiskyDetailsPage")), 400);
    })
);
