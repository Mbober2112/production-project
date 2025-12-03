import { StateSchema } from "app/providers/StoreProvider";
import { getLoginError } from "./getLoginError";

describe("getLoginError", () => {
  test("should return loginError", () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: { error: "someError" },
    };
    expect(getLoginError(state as StateSchema)).toEqual("someError");
  });

  test("should work with empty state", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getLoginError(state as StateSchema)).toEqual(undefined);
  });
});
