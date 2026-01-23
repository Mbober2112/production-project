import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { WhiskySortField } from "entitiesModule/Whisky";
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

    if (sortFromUrl) {
      dispatch(whiskyPageActions.setSort(sortFromUrl));
    }

    if (orderFromUrl) {
      dispatch(whiskyPageActions.setOrder(orderFromUrl));
    }

    if (searchFromUrl) {
      dispatch(whiskyPageActions.setSearch(searchFromUrl));
    }

    dispatch(whiskyPageActions.initState());
    dispatch(fetchWhiskyList({ page: 1 }));
  }
});
