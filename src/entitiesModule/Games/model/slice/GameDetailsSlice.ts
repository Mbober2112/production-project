import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchGameById } from "../services/fetchGameById/fetchGameById";
import { Game } from "../types/game";
import { GameDetailsSchema } from "../types/gameDetailsSchema";

const initialState: GameDetailsSchema = {
  data: undefined,
  isLoading: false,
  error: undefined,
};

export const gameDetailsSlice = createSlice({
  name: "gameDetails",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGameById.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(
        fetchGameById.fulfilled,
        (state, action: PayloadAction<Game>) => {
          state.isLoading = false;
          state.data = action.payload;
        }
      )
      .addCase(fetchGameById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

// Action creators are generated for each case reducer function
export const { actions: gameDetailsActions } = gameDetailsSlice;
export const { reducer: gameDetailsReducer } = gameDetailsSlice;
