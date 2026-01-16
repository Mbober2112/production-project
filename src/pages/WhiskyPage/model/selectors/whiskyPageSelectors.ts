import { StateSchema } from "app/providers/StoreProvider";
import { ListViewType } from "shared/const/common";

export const getWhiskyPageIsLoading = (state: StateSchema) =>
  state.whiskyPage?.isLoading;

export const getWhiskyPageError = (state: StateSchema) =>
  state.whiskyPage?.error;

export const getwhiskyPageView = (state: StateSchema) =>
  state.whiskyPage?.view || ListViewType.LIST;

export const getwhiskyPageNum = (state: StateSchema) =>
  state.whiskyPage?.page || 1;

export const getwhiskyPageLimit = (state: StateSchema) =>
  state.whiskyPage?.limit || 12;

export const getwhiskyPageHasMore = (state: StateSchema) =>
  state.whiskyPage?.hasMore;
