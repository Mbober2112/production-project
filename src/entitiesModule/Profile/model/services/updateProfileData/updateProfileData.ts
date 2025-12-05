import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { getProfileForm } from "../../selectors/getProfileForm/getProfileForm";
import { Profile } from "../../types/profile";

export const updateProfileData = createAsyncThunk<
  Profile,
  void,
  ThunkConfig<string>
>("profile/updateProfile", async (_, thunkApi) => {
  const { extra, rejectWithValue, getState } = thunkApi;
  const profileForm = getProfileForm(getState());

  try {
    const response = await extra.api.put<Profile>("/profile", profileForm);
    return response.data;
  } catch (e) {
    console.log(e);
    return rejectWithValue("error");
  }
});
