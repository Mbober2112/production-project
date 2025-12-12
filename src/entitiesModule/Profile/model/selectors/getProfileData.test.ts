import { StateSchema } from "app/providers/StoreProvider";
import { Countries } from "entitiesModule/Country";
import { getProfileData } from "./getProfileData/getProfileData";

describe("getProfileData", () => {
  test("should return profile data", () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        data: {
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
    expect(getProfileData(state as StateSchema)).toEqual({
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
    expect(getProfileData(state as StateSchema)).toEqual(undefined);
  });
});
