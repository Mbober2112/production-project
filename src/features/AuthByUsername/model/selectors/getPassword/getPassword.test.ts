import { DeepPartial } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider";
import { getPassword } from "./getPassword";

describe("getPassword", () => {
  test("should return password", () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: { password: "somePassword" },
    };
    expect(getPassword(state as StateSchema)).toEqual("somePassword");
  });

  test("should work with empty state", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getPassword(state as StateSchema)).toEqual("");
  });
});
