import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { getProfileForm } from "../../selectors/profileSelectors";
import { Profile, ValidateProfileError } from "../../types/profile";
import { validateProfileData } from "../validateProfileData/validateProfileData";

export const updateProfileData = createAsyncThunk<
  Profile,
  string,
  ThunkConfig<ValidateProfileError[]>
>("profile/updateProfile", async (profileId, thunkApi) => {
  const { extra, rejectWithValue, getState } = thunkApi;
  const profileForm = getProfileForm(getState());
  const errors = validateProfileData(profileForm);

  if (errors.length) {
    return rejectWithValue(errors);
  }

  try {
    const response = await extra.api.put<Profile>(
      `/profile/${profileId}`,
      profileForm
    );

    if (!response.data) {
      throw new Error();
    }

    return response.data;
  } catch (e) {
    console.log(e);
    return rejectWithValue([ValidateProfileError.SERVER_ERROR]);
  }
});
