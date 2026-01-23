import { EntityState } from "@reduxjs/toolkit";
import { WhiskySortField } from "entitiesModule/Whisky";
import { Whisky } from "entitiesModule/Whisky/model/types/whisky";
import { ListViewType, SortOrder } from "shared/const/common";

export interface WhiskyPageSchema extends EntityState<Whisky> {
  isLoading?: boolean;
  error?: string;
  view: ListViewType;
  _inited: boolean;
  //pagination
  page: number;
  limit?: number;
  hasMore: boolean;
  //filters
  order: SortOrder;
  sort: WhiskySortField;
  search: string;
}
