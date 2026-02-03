import { StateSchema } from "app/providers/StoreProvider";
import { WhiskySortField } from "entitiesModule/Whisky";
import {
  WhiskyCaskType,
  WhiskyType,
} from "entitiesModule/Whisky/model/types/whisky";
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

export const getwhiskyPageInited = (state: StateSchema) =>
  state.whiskyPage?._inited;

export const getwhiskyPageSort = (state: StateSchema) =>
  state.whiskyPage?.sort || WhiskySortField.TITLE;

export const getwhiskyPageOrder = (state: StateSchema) =>
  state.whiskyPage?.order || "asc";

export const getwhiskyPageSearch = (state: StateSchema) =>
  state.whiskyPage?.search || "";

export const getwhiskyPageType = (state: StateSchema) =>
  state.whiskyPage?.type || WhiskyType.ALL;

export const getwhiskyPageCaskType = (state: StateSchema) =>
  state.whiskyPage?.caskType || WhiskyCaskType.ALL;
