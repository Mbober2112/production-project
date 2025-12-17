import { StateSchema } from "app/providers/StoreProvider";

export const getWhiskyDetailsCommentsIsLoading = (state: StateSchema) =>
  state.whiskyDetailsComments?.isLoading;

export const getWhiskyDetailsCommentsError = (state: StateSchema) =>
  state.whiskyDetailsComments?.error;
