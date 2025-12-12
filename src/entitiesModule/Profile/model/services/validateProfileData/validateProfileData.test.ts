import { Countries } from "entitiesModule/Country";
import { ValidateProfileError } from "../../types/profile";
import { validateProfileData } from "./validateProfileData";

const data = {
  firstname: "Евгений",
  lastname: "Бобров",
  country: Countries.RUSSIA,
  city: "Нижний Новгород",
  avatar: "https://someUrl.ru",
  dateOfBirth: new Date("1990-05-15T00:00:00Z").getTime(),
};

describe("validateProfileData", () => {
  test("success", async () => {
    const result = validateProfileData(data);

    expect(result).toEqual([]);
  });

  test("incorrect firstname", async () => {
    const result = validateProfileData({ ...data, firstname: "111" });

    expect(result).toEqual([ValidateProfileError.INCORRECT_FIRSTNAME]);
  });

  test("incorrect lastName", async () => {
    const result = validateProfileData({ ...data, lastname: "111" });

    expect(result).toEqual([ValidateProfileError.INCORRECT_LASTNAME]);
  });

  test("incorrect city", async () => {
    const result = validateProfileData({ ...data, city: "111" });

    expect(result).toEqual([ValidateProfileError.INCORRECT_CITY]);
  });

  test("incorrect avatar link", async () => {
    const result = validateProfileData({ ...data, avatar: "some text" });

    expect(result).toEqual([ValidateProfileError.INCORRECT_AVATAR_LINK]);
  });

  test("incorrect all", async () => {
    const result = validateProfileData({
      firstname: "111",
      lastname: "111",
      city: "111",
      avatar: "some text",
    });

    expect(result).toEqual(
      expect.arrayContaining([
        ValidateProfileError.INCORRECT_AVATAR_LINK,
        ValidateProfileError.INCORRECT_CITY,
        ValidateProfileError.INCORRECT_FIRSTNAME,
        ValidateProfileError.INCORRECT_LASTNAME,
      ])
    );
  });
});
