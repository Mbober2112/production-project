import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { getwhiskyPageInited } from "../../selectors/whiskyPageSelectors";
import { whiskyPageActions } from "../../slices/whiskyPageSlice";
import { fetchWhiskyList } from "../fetchWhiskyList/fetchWhiskyList";

export const initWhiskyPage = createAsyncThunk<void, void, ThunkConfig<string>>(
  "whiskyPage/initWhiskyPage",
  async (_, thunkApi) => {
    const { getState, dispatch } = thunkApi;
    const inited = getwhiskyPageInited(getState());

    if (!inited) {
      dispatch(whiskyPageActions.initState());
      dispatch(fetchWhiskyList({ page: 1 }));
    }
  }
);
