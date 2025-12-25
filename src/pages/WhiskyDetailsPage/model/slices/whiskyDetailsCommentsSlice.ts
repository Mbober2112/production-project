import {
  createEntityAdapter,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider";
import { Comment } from "entitiesModule/Comment";
import { fetchCommentsByWhiskyId } from "../services/fetchCommentsByWhiskyId/fetchCommentsByWhiskyId";
import { WhiskyDetailsCommentsSchema } from "../types/WhiskyDetailsCommentsSchema";

const commentsAdapter = createEntityAdapter<Comment>({
  selectId: (comment) => comment.id,
});

export const getWhiskyComments = commentsAdapter.getSelectors<StateSchema>(
  (state) => state.whiskyDetailsComments || commentsAdapter.getInitialState()
);

const whiskyDetailsCommentsSlice = createSlice({
  name: "whiskyDetailsCommentsSlice",
  initialState: commentsAdapter.getInitialState<WhiskyDetailsCommentsSchema>({
    isLoading: false,
    error: undefined,
    ids: [],
    entities: {},
  }),
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCommentsByWhiskyId.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(
        fetchCommentsByWhiskyId.fulfilled,
        (state, action: PayloadAction<Comment[]>) => {
          state.isLoading = false;
          commentsAdapter.setAll(state, action.payload);
        }
      )
      .addCase(fetchCommentsByWhiskyId.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { reducer: whiskyDetailsCommentsReducer } =
  whiskyDetailsCommentsSlice;
