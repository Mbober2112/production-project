import { TestAsyncThunk } from "shared/lib/tests/TestAsyncThunk/TestAsyncThunk";
import { fetchWhiskyList } from "../fetchWhiskyList/fetchWhiskyList";
import { fetchNextWhiskyPage } from "./fetchNextWhiskyPage";

jest.mock("../fetchWhiskyList/fetchWhiskyList");

describe("fetchNextWhiskyPage.test", () => {
  test("success", async () => {
    const thunk = new TestAsyncThunk(fetchNextWhiskyPage, {
      whiskyPage: {
        page: 2,
        ids: [],
        entities: {},
        limit: 5,
        isLoading: false,
        hasMore: true,
      },
    });

    await thunk.callThunk();

    expect(thunk.dispatch).toBeCalledTimes(4);
    expect(fetchWhiskyList).toHaveBeenCalledWith({ page: 3 });
  });

  test("fetchWhiskyList not called", async () => {
    const thunk = new TestAsyncThunk(fetchNextWhiskyPage, {
      whiskyPage: {
        page: 2,
        ids: [],
        entities: {},
        limit: 5,
        isLoading: false,
        hasMore: false,
      },
    });

    await thunk.callThunk();

    expect(thunk.dispatch).toBeCalledTimes(2);
    expect(fetchWhiskyList).not.toHaveBeenCalled();
  });
});
