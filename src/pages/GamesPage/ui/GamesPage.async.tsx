import { lazy } from "react";

export const GamesPageAsync = lazy(
  () =>
    new Promise((resolve) => {
      // @ts-ignore
      // ТОЛЬКО ДЛЯ ИМИТАЦИИ ЗАГРУЗКИ
      setTimeout(() => resolve(import("./GamesPage")), 400);
    })
);
