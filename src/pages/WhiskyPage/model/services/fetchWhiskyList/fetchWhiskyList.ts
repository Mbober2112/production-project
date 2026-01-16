import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { Whisky } from "entitiesModule/Whisky/model/types/whisky";
import { getwhiskyPageLimit } from "../../selectors/whiskyPageSelectors";

interface FetchWhiskyListProps {
  page: number;
}

export const fetchWhiskyList = createAsyncThunk<
  Whisky[],
  FetchWhiskyListProps,
  ThunkConfig<string>
>("whiskyPage/fetchWhiskyList", async (args, thunkApi) => {
  const { extra, rejectWithValue, getState } = thunkApi;
  const { page = 1 } = args;
  const limit = getwhiskyPageLimit(getState());

  try {
    const response = await extra.api.get<Whisky[]>("/whisky", {
      params: {
        _limit: limit,
        _page: page,
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
