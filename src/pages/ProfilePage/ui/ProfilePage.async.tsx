import { lazy } from "react";

export const ProfilePageAsync = lazy(
  () =>
    new Promise((resolve) => {
      // @ts-ignore
      // ТОЛЬКО ДЛЯ ИМИТАЦИИ ЗАГРУЗКИ
      setTimeout(() => resolve(import("./ProfilePage")), 400);
    })
);
