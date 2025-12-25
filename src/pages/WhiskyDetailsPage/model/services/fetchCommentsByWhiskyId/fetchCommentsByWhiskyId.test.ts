import { TestAsyncThunk } from "shared/lib/tests/TestAsyncThunk/TestAsyncThunk";
import { Countries } from "entitiesModule/Country";
import { fetchCommentsByWhiskyId } from "./fetchCommentsByWhiskyId";
import { Comment } from "entitiesModule/Comment";

const data: Comment[] = [
  {
    id: "1",
    text: "some comment",
    whiskyId: "1",
    user: {
      id: "1",
      username: "admin",
      avatar:
        "https://pic.rutubelist.ru/user/3b/27/3b2758ad5492a76b578f7ee072e4e894.jpg",
    },
    createdAt: 12345678,
  },
  {
    id: "2",
    text: "some comment 2",
    whiskyId: "1",
    user: {
      id: "2",
      username: "admin2",
      avatar:
        "https://pic.rutubelist.ru/user/3b/27/3b2758ad5492a76b578f7ee072e4e894.jpg",
    },
    createdAt: 12345678,
  },
  {
    whiskyId: "1",
    text: "New text",
    id: "nT98iq0",
    user: {
      id: "2",
      username: "admin2",
      avatar:
        "https://pic.rutubelist.ru/user/3b/27/3b2758ad5492a76b578f7ee072e4e894.jpg",
    },
    createdAt: 12345678,
  },
];

describe("fetchCommentsByWhiskyId", () => {
  test("success", async () => {
    const thunk = new TestAsyncThunk(fetchCommentsByWhiskyId);
    thunk.api.get.mockReturnValue(Promise.resolve({ data }));

    const result = await thunk.callThunk("1");

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe("fulfilled");
    expect(result.payload).toEqual(data);
  });

  test("error login", async () => {
    const thunk = new TestAsyncThunk(fetchCommentsByWhiskyId);
    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk("1");

    expect(result.meta.requestStatus).toBe("rejected");
  });
});
