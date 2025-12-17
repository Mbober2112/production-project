import { TestAsyncThunk } from "shared/lib/tests/TestAsyncThunk/TestAsyncThunk";
import { Countries } from "entitiesModule/Country";
import { fetchWhiskyById } from "./fetchWhiskyById";
import { WhiskyType } from "../../types/whisky";

const data = {
  id: "4",
  title: "Loch Lomond Single Malt 12 Years Old",
  description: "Some description",
  img: "https://static.decanter.ru/upload/images/409607/409607-viski-loch-lomond-single-malt-12-years-old-0-7-l-sq.jpg",
  bottler: "Distillery Bottling",
  distillery: "Loch Lomond",
  statedAge: 12,
  type: WhiskyType.SINGLE_MALT,
  country: Countries.SCOTLAND,
  alc: 46,
  createdAt: 123456654,
  updatedAt: 123456654,
};

describe("fetchWhiskyById", () => {
  test("success", async () => {
    const thunk = new TestAsyncThunk(fetchWhiskyById);
    thunk.api.get.mockReturnValue(Promise.resolve({ data }));

    const result = await thunk.callThunk("4");

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe("fulfilled");
    expect(result.payload).toEqual(data);
  });

  test("error login", async () => {
    const thunk = new TestAsyncThunk(fetchWhiskyById);
    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk("4");

    expect(result.meta.requestStatus).toBe("rejected");
  });
});
