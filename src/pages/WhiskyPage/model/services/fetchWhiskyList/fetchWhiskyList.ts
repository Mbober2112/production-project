import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { Whisky } from "entitiesModule/Whisky/model/types/whisky";
import {
  getwhiskyPageLimit,
  getwhiskyPageOrder,
  getwhiskyPageSearch,
  getwhiskyPageSort,
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
  const sortOrder = getwhiskyPageOrder(getState());
  const searchText = getwhiskyPageSearch(getState());

  try {
    const response = await extra.api.get<Whisky[]>("/whisky", {
      params: {
        _limit: limit,
        _page: page,
        _sort: sort,
        _order: sortOrder,
        q: searchText,
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
