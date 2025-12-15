import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { Game } from "../../types/game";

export const fetchGameById = createAsyncThunk<
  Game,
  string,
  ThunkConfig<string>
>("GameDetails/fetchGameById", async (whiskyId, thunkApi) => {
  const { extra, rejectWithValue } = thunkApi;

  try {
    const response = await extra.api.get<Game>(`/games/${whiskyId}`);

    if (!response.data) {
      throw new Error();
    }

    return response.data;
  } catch (e) {
    console.log(e);
    return rejectWithValue("error");
  }
});
