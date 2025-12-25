import { AddCommentFormSchema } from "../types/addCommentForm";
import {
  addCommentFormActions,
  addCommentFormReducer,
} from "./addCommentFormSlice";

describe("addCommentFormSlice", () => {
  test("test set comment text", () => {
    const state: DeepPartial<AddCommentFormSchema> = { text: "" };

    expect(
      addCommentFormReducer(
        state as AddCommentFormSchema,
        addCommentFormActions.setText("Some Text")
      )
    ).toEqual({
      text: "Some Text",
    });
  });
});
