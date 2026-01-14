import { StateSchema } from "app/providers/StoreProvider";
import { ListViewType } from "shared/const/common";

export const getWhiskyPageIsLoading = (state: StateSchema) =>
  state.whiskyPage?.isLoading;

export const getWhiskyPageError = (state: StateSchema) =>
  state.whiskyPage?.error;

export const getwhiskyPageView = (state: StateSchema) =>
  state.whiskyPage?.view || ListViewType.LIST;
