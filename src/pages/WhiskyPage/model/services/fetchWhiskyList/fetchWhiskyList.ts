import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { Whisky, WhiskyType } from "entitiesModule/Whisky/model/types/whisky";
import { addQueryParams } from "shared/lib/url/addQueryParams/addQueryParams";
import {
  getwhiskyPageLimit,
  getwhiskyPageOrder,
  getwhiskyPageSearch,
  getwhiskyPageSort,
  getwhiskyPageType,
} from "../../selectors/whiskyPageSelectors";

interface FetchWhiskyListProps {
  page: number;
  replace?: boolean;
}

export const fetchWhiskyList = createAsyncThunk<
  Whisky[],
  FetchWhiskyListProps,
  ThunkConfig<string>
>("whiskyPage/fetchWhiskyList", async (args, thunkApi) => {
  const { extra, rejectWithValue, getState } = thunkApi;
  const { page = 1 } = args;
  const limit = getwhiskyPageLimit(getState());
  const sort = getwhiskyPageSort(getState());
  const order = getwhiskyPageOrder(getState());
  const search = getwhiskyPageSearch(getState());
  const type = getwhiskyPageType(getState());

  try {
    addQueryParams({ sort, order, search, type });

    const response = await extra.api.get<Whisky[]>("/whisky", {
      params: {
        _limit: limit,
        _page: page,
        _sort: sort,
        _order: order,
        q: search,
        type: type === WhiskyType.ALL ? undefined : type,
      },
    });

    if (!response.data) {
      throw new Error();
    }

    return response.data;
  } catch (e) {
    return rejectWithValue("error");
  }
});
