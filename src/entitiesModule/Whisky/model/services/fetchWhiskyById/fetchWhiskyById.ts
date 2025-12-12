import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { Whisky } from "../../types/whisky";

export const fetchWhiskyById = createAsyncThunk<
  Whisky,
  string,
  ThunkConfig<string>
>("whiskyDetails/fetchWhiskyById", async (whiskyId, thunkApi) => {
  const { extra, rejectWithValue } = thunkApi;

  try {
    const response = await extra.api.get<Whisky>(`/whisky/${whiskyId}`);

    if (!response.data) {
      throw new Error();
    }

    return response.data;
  } catch (e) {
    console.log(e);
    return rejectWithValue("error");
  }
});
