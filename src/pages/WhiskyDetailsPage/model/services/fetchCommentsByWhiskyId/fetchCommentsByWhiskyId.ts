import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { Comment } from "entitiesModule/Comment";

export const fetchCommentsByWhiskyId = createAsyncThunk<
  Comment[],
  string | undefined,
  ThunkConfig<string>
>("whiskyDetails/fetchCommentsByWhiskyId", async (whiskyId, thunkApi) => {
  const { extra, rejectWithValue } = thunkApi;

  if (!whiskyId) {
    return rejectWithValue("error");
  }

  try {
    const response = await extra.api.get<Comment[]>("/comments", {
      params: {
        whiskyId,
        _expand: "user",
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
