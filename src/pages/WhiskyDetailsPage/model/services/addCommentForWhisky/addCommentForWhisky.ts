import { createAsyncThunk } from "@reduxjs/toolkit";
import { getUserAuthData } from "entitiesModule/User";
import { ThunkConfig } from "app/providers/StoreProvider";
import { Comment } from "entitiesModule/Comment";
import { getWhiskyDetailsData } from "entitiesModule/Whisky/model/selectors/whiskyDetailsSelectors";
import { fetchCommentsByWhiskyId } from "../fetchCommentsByWhiskyId/fetchCommentsByWhiskyId";

type AddCommentArgs = { text: string; date: number };

export const addCommentForWhisky = createAsyncThunk<
  Comment,
  AddCommentArgs,
  ThunkConfig<string>
>("whiskyDetails/addCommentForWhisky", async (args, thunkApi) => {
  const { extra, dispatch, rejectWithValue, getState } = thunkApi;
  const { text, date } = args;

  const userData = getUserAuthData(getState());
  const whisky = getWhiskyDetailsData(getState());

  if (!userData || !text || !whisky || !date) {
    return rejectWithValue("no data");
  }

  try {
    const response = await extra.api.post<Comment>("/comments", {
      whiskyId: whisky.id,
      userId: userData.id,
      createdAt: date,
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
