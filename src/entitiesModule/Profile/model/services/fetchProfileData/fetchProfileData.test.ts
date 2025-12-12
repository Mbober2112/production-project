import { TestAsyncThunk } from "shared/lib/tests/TestAsyncThunk/TestAsyncThunk";
import { fetchProfileData } from "./fetchProfileData";
import { Countries } from "entitiesModule/Country";

const data = {
  firstname: "Евгений",
  lastname: "Бобров",
  country: Countries.RUSSIA,
  city: "Нижний Новгород",
  avatar: "https://someUrl.ru",
  dateOfBirth: new Date("1990-05-15T00:00:00Z").getTime(),
};

describe("fetchProfileData", () => {
  test("success", async () => {
    const thunk = new TestAsyncThunk(fetchProfileData);
    thunk.api.get.mockReturnValue(Promise.resolve({ data }));

    const result = await thunk.callThunk();

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe("fulfilled");
    expect(result.payload).toEqual(data);
  });

  test("error login", async () => {
    const thunk = new TestAsyncThunk(fetchProfileData);
    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk();

    expect(result.meta.requestStatus).toBe("rejected");
  });
});
