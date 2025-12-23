import { createAsyncThunk } from "@reduxjs/toolkit";
import { getUserAuthData } from "entitiesModule/User";
import { ThunkConfig } from "app/providers/StoreProvider";
import { Comment } from "entitiesModule/Comment";
import { getWhiskyDetailsData } from "entitiesModule/Whisky/model/selectors/whiskyDetailsSelectors";
import { fetchCommentsByWhiskyId } from "../fetchCommentsByWhiskyId/fetchCommentsByWhiskyId";

export const addCommentForWhisky = createAsyncThunk<
  Comment,
  string,
  ThunkConfig<string>
>("whiskyDetails/addCommentForWhisky", async (text, thunkApi) => {
  const { extra, dispatch, rejectWithValue, getState } = thunkApi;

  const userData = getUserAuthData(getState());
  const whisky = getWhiskyDetailsData(getState());

  if (!userData || !text || !whisky) {
    return rejectWithValue("no data");
  }

  try {
    const response = await extra.api.post<Comment>("/comments", {
      whiskyId: whisky.id,
      userId: userData.id,
      text,
    });

    if (!response.data) {
      throw new Error();
    }

    dispatch(fetchCommentsByWhiskyId(whisky.id));

    return response.data;
  } catch (e) {
    return rejectWithValue("error");
  }
});
