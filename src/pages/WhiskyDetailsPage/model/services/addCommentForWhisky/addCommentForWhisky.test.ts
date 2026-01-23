import { TestAsyncThunk } from "shared/lib/tests/TestAsyncThunk/TestAsyncThunk";
import { addCommentForWhisky } from "./addCommentForWhisky";
import {
  WhiskyCaskType,
  WhiskyType,
} from "entitiesModule/Whisky/model/types/whisky";
import { Countries } from "entitiesModule/Country";

const date = Date.now();
const newComment = {
  id: "5",
  text: "New comment text",
  whiskyId: "1",
  createdAt: date,
};

const userAuthData = {
  id: "1",
  username: "testuser",
};

const whiskyDetailsData = {
  id: "1",
  title: "Test Whisky",
  description: "Test description",
  img: "test.jpg",
  bottler: "Test Bottler",
  distillery: "Test Distillery",
  statedAge: 10,
  type: WhiskyType.SINGLE_MALT,
  country: Countries.SCOTLAND,
  alc: 40,
  raiting: 80,
  rates: 1,
  casks: [WhiskyCaskType.BOURBON_CASK, WhiskyCaskType.SHERRY_CASK],
  createdAt: 123456789,
  updatedAt: 123456789,
};

describe("addCommentForWhisky", () => {
  test("success: comment added and comments refetched", async () => {
    const thunk = new TestAsyncThunk(addCommentForWhisky, {
      user: {
        authData: userAuthData,
      },
      whiskyDetails: {
        data: whiskyDetailsData,
      },
    });

    thunk.api.post.mockReturnValue(Promise.resolve({ data: newComment }));
    const result = await thunk.callThunk({ text: "New comment text", date });

    expect(thunk.api.post).toHaveBeenCalledWith("/comments", {
      whiskyId: whiskyDetailsData.id,
      userId: userAuthData.id,
      text: "New comment text",
      createdAt: date,
    });
    expect(result.meta.requestStatus).toBe("fulfilled");
    expect(result.payload).toEqual(newComment);
    expect(thunk.dispatch).toHaveBeenCalledWith(expect.any(Function));
    expect(thunk.dispatch).toHaveBeenCalledTimes(3);
  });

  test("error: no user data", async () => {
    const thunk = new TestAsyncThunk(addCommentForWhisky, {
      whiskyDetails: {
        data: whiskyDetailsData,
      },
    });

    const result = await thunk.callThunk({ text: "New comment text", date });

    expect(thunk.api.post).not.toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe("rejected");
  });

  test("error: no whisky data", async () => {
    const thunk = new TestAsyncThunk(addCommentForWhisky, {
      user: {
        authData: userAuthData,
      },
    });

    const result = await thunk.callThunk({ text: "New comment text", date });

    expect(thunk.api.post).not.toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe("rejected");
  });

  test("error: server error", async () => {
    const thunk = new TestAsyncThunk(addCommentForWhisky, {
      user: {
        authData: userAuthData,
      },
      whiskyDetails: {
        data: whiskyDetailsData,
      },
    });

    thunk.api.post.mockReturnValue(Promise.resolve({ status: 500 }));

    const result = await thunk.callThunk({ text: "New comment text", date });

    expect(thunk.api.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe("rejected");
  });
});
