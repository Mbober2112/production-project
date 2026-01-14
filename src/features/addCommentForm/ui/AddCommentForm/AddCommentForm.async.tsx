import { FC, lazy } from "react";
import { AddCommentFormProps } from "./AddCommentForm";

export const AddCommentFormAsync = lazy<FC<AddCommentFormProps>>(
  () =>
    new Promise((resolve) => {
      // @ts-ignore
      // ТОЛЬКО ДЛЯ ИМИТАЦИИ ЗАГРУЗКИ
      setTimeout(() => resolve(import("./AddCommentForm")), 400);
    })
);
