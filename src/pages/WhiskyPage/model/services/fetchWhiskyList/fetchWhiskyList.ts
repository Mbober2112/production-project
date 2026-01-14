import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { Whisky } from "entitiesModule/Whisky/model/types/whisky";

export const fetchWhiskyList = createAsyncThunk<
  Whisky[],
  void,
  ThunkConfig<string>
>("whiskyPage/fetchWhiskyList", async (_, thunkApi) => {
  const { extra, rejectWithValue } = thunkApi;

  try {
    const response = await extra.api.get<Whisky[]>("/whisky");

    if (!response.data) {
      throw new Error();
    }

    return response.data;
  } catch (e) {
    return rejectWithValue("error");
  }
});
