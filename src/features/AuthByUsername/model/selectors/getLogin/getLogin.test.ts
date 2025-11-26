import { DeepPartial } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider";
import { getLogin } from "./getLogin";

describe("getLogin", () => {
  test("should return login", () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: { login: "someLogin" },
    };
    expect(getLogin(state as StateSchema)).toEqual("someLogin");
  });

  test("should work with empty state", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getLogin(state as StateSchema)).toEqual("");
  });
});
