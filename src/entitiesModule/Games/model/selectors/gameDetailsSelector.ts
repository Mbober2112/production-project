import { StateSchema } from "app/providers/StoreProvider";

export const getGameDetailsData = (state: StateSchema) =>
  state.gameDetails?.data;

export const getGameDetailsIsLoading = (state: StateSchema) =>
  state.gameDetails?.isLoading;

export const getGameDetailsError = (state: StateSchema) =>
  state.gameDetails?.error;
