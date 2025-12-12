import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchWhiskyById } from "../services/fetchWhiskyById/fetchWhiskyById";
import { Whisky } from "../types/whisky";
import { WhiskyDetailsSchema } from "../types/whiskyDetailsSchema";

const initialState: WhiskyDetailsSchema = {
  data: undefined,
  isLoading: false,
  error: undefined,
};

export const whiskyDetailsSlice = createSlice({
  name: "whiskyDetails",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWhiskyById.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(
        fetchWhiskyById.fulfilled,
        (state, action: PayloadAction<Whisky>) => {
          state.isLoading = false;
          state.data = action.payload;
        }
      )
      .addCase(fetchWhiskyById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

// Action creators are generated for each case reducer function
export const { actions: whiskyDetailsActions } = whiskyDetailsSlice;
export const { reducer: whiskyDetailsReducer } = whiskyDetailsSlice;
