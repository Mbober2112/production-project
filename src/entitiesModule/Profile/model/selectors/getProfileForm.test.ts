import { StateSchema } from "app/providers/StoreProvider";
import { Countries } from "entitiesModule/Country";
import { getProfileForm } from "./profileSelectors";

describe("getProfileForm", () => {
  test("should return profile form", () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        form: {
          firstname: "A",
          lastname: "B",
          dateOfBirth: 1,
          country: Countries.RUSSIA,
          city: "C",
          username: "D",
          avatar: "avatar",
          id: "1",
        },
      },
    };
    expect(getProfileForm(state as StateSchema)).toEqual({
      firstname: "A",
      lastname: "B",
      dateOfBirth: 1,
      country: Countries.RUSSIA,
      city: "C",
      username: "D",
      avatar: "avatar",
      id: "1",
    });
  });

  test("should work with empty state", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileForm(state as StateSchema)).toEqual(undefined);
  });
});
