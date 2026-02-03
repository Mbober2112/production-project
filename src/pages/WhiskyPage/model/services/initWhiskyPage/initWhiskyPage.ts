import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { WhiskySortField } from "entitiesModule/Whisky";
import {
  WhiskyCaskType,
  WhiskyType,
} from "entitiesModule/Whisky/model/types/whisky";
import { SortOrder } from "shared/const/common";
import { getwhiskyPageInited } from "../../selectors/whiskyPageSelectors";
import { whiskyPageActions } from "../../slices/whiskyPageSlice";
import { fetchWhiskyList } from "../fetchWhiskyList/fetchWhiskyList";

export const initWhiskyPage = createAsyncThunk<
  void,
  URLSearchParams,
  ThunkConfig<string>
>("whiskyPage/initWhiskyPage", async (searchParams, thunkApi) => {
  const { getState, dispatch } = thunkApi;
  const inited = getwhiskyPageInited(getState());

  if (!inited) {
    const sortFromUrl = searchParams.get("sort") as WhiskySortField;
    const orderFromUrl = searchParams.get("order") as SortOrder;
    const searchFromUrl = searchParams.get("search");
    const typeFromUrl = searchParams.get("type") as WhiskyType;
    const caskTypeFromUrl = searchParams.get("casks_like") as WhiskyCaskType;

    if (sortFromUrl) {
      dispatch(whiskyPageActions.setSort(sortFromUrl));
    }

    if (orderFromUrl) {
      dispatch(whiskyPageActions.setOrder(orderFromUrl));
    }

    if (searchFromUrl) {
      dispatch(whiskyPageActions.setSearch(searchFromUrl));
    }

    if (typeFromUrl) {
      dispatch(whiskyPageActions.setType(typeFromUrl));
    }

    if (caskTypeFromUrl) {
      dispatch(whiskyPageActions.setCaskType(caskTypeFromUrl));
    }

    dispatch(whiskyPageActions.initState());
    dispatch(fetchWhiskyList({ page: 1 }));
  }
});
