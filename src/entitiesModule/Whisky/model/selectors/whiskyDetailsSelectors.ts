import { StateSchema } from "app/providers/StoreProvider";

export const getWhiskyDetailsData = (state: StateSchema) =>
  state.whiskyDetails?.data;

export const getWhiskyDetailsIsLoading = (state: StateSchema) =>
  state.whiskyDetails?.isLoading;

export const getWhiskyDetailsError = (state: StateSchema) =>
  state.whiskyDetails?.error;
