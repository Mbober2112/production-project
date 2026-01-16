import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import {
  getwhiskyPageHasMore,
  getWhiskyPageIsLoading,
  getwhiskyPageNum,
} from "../../selectors/whiskyPageSelectors";
import { whiskyPageActions } from "../../slices/whiskyPageSlice";
import { fetchWhiskyList } from "../fetchWhiskyList/fetchWhiskyList";

export const fetchNextWhiskyPage = createAsyncThunk<
  void,
  void,
  ThunkConfig<string>
>("whiskyPage/fetchNextWhiskyPage", async (_, thunkApi) => {
  const { getState, dispatch } = thunkApi;
  const hasMore = getwhiskyPageHasMore(getState());
  const page = getwhiskyPageNum(getState());
  const isLoading = getWhiskyPageIsLoading(getState());

  if (hasMore && !isLoading) {
    dispatch(whiskyPageActions.setPage(page + 1));
    dispatch(
      fetchWhiskyList({
        page: page + 1,
      })
    );
  }
});
