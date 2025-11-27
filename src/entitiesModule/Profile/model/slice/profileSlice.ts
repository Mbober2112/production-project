import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { USER_LOCALSTORAGE_KEY } from "shared/const/localstorage";
import { Profile, ProfileSchema } from "../types/profile";

const initialState: ProfileSchema = {
  data: undefined,
  isLoading: false,
  readonly: true,
  error: undefined,
};

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setProfileData: (state, action: PayloadAction<Profile>) => {
      state.data = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
