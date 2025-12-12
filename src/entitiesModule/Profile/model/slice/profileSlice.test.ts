import {
  profileActions,
  profileReducer,
  ProfileSchema,
} from "../../../Profile";
import { Countries } from "entitiesModule/Country";
import { ValidateProfileError } from "../types/profile";
import { updateProfileData } from "../services/updateProfileData/updateProfileData";

const data = {
  firstname: "Евгений",
  lastname: "Бобров",
  country: Countries.RUSSIA,
  city: "Нижний Новгород",
  avatar: "https://someUrl.ru",
  dateOfBirth: new Date("1990-05-15T00:00:00Z").getTime(),
};

describe("profileSlice", () => {
  test("test cancel edit", () => {
    const state: DeepPartial<ProfileSchema> = { data, form: { username: "" } };

    expect(
      profileReducer(state as ProfileSchema, profileActions.cancelProfileForm())
    ).toEqual({
      validateErrors: undefined,
      data,
      form: data,
    });
  });

  test("test update profile", () => {
    const state: DeepPartial<ProfileSchema> = { form: undefined };

    expect(
      profileReducer(
        state as ProfileSchema,
        profileActions.updateProfileForm({
          lastname: "qwerty",
        })
      )
    ).toEqual({
      form: { lastname: "qwerty" },
    });
  });

  test("test update profile service pending", () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: false,
      validateErrors: [ValidateProfileError.SERVER_ERROR],
    };

    expect(
      profileReducer(state as ProfileSchema, updateProfileData.pending)
    ).toEqual({
      isLoading: true,
      validateErrors: undefined,
    });
  });

  test("test update profile service fullfiled", () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: true,
    };

    expect(
      profileReducer(
        state as ProfileSchema,
        updateProfileData.fulfilled(data, "")
      )
    ).toEqual({
      isLoading: false,
      validateErrors: undefined,
      validateError: undefined,
      form: data,
      data,
    });
  });
});
