import { lazy } from "react";

export const WhiskyPageAsync = lazy(
  () =>
    new Promise((resolve) => {
      // @ts-ignore
      // ТОЛЬКО ДЛЯ ИМИТАЦИИ ЗАГРУЗКИ
      setTimeout(() => resolve(import("./WhiskyPage")), 400);
    })
);
