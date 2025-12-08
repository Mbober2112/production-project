import { StateSchema } from "app/providers/StoreProvider";
import { Countries } from "entitiesModule/Country";
import { getProfileForm } from "./getProfileForm";

describe("getProfileForm", () => {
  test("should return profile form", () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        form: {
          firstname: "A",
          lastname: "B",
          dateOfBirth: 1,
          country: Countries.Russia,
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
      country: Countries.Russia,
      city: "C",
      username: "D",
      avatar: "avatar",
      id: "1",
    });
  });
});
