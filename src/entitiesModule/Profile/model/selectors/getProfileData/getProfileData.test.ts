import { StateSchema } from "app/providers/StoreProvider";
import { Countries } from "shared/const/common";
import { getProfileData } from "./getProfileData";

describe("getProfileData", () => {
  test("should return profile data", () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        data: {
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
    expect(getProfileData(state as StateSchema)).toEqual({
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
