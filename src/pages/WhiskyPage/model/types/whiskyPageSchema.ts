import { EntityState } from "@reduxjs/toolkit";
import { Whisky } from "entitiesModule/Whisky/model/types/whisky";
import { ListViewType } from "shared/const/common";

export interface WhiskyPageSchema extends EntityState<Whisky> {
  isLoading?: boolean;
  error?: string;
  view: ListViewType;
  //pagination
  page: number;
  limit?: number;
  hasMore: boolean;
  _inited: boolean;
}
