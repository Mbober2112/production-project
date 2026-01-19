import {
  createEntityAdapter,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider";
import { Whisky } from "entitiesModule/Whisky/model/types/whisky";
import { ListViewType } from "shared/const/common";
import { WHISKY_LIST_VIEW_KEY } from "shared/const/localstorage";
import { fetchWhiskyList } from "../services/fetchWhiskyList/fetchWhiskyList";
import { WhiskyPageSchema } from "../types/whiskyPageSchema";

const whiskyAdapter = createEntityAdapter<Whisky>({
  selectId: (whisky) => whisky.id,
});

export const getWhisky = whiskyAdapter.getSelectors<StateSchema>(
  (state) => state.whiskyPage || whiskyAdapter.getInitialState()
);

const whiskyPageSlice = createSlice({
  name: "whiskyPageSlice",
  initialState: whiskyAdapter.getInitialState<WhiskyPageSchema>({
    isLoading: false,
    error: undefined,
    view: ListViewType.LIST,
    page: 1,
    hasMore: false,
    ids: [],
    entities: {},
    _inited: false,
  }),
  reducers: {
    setView: (state, action: PayloadAction<ListViewType>) => {
      state.view = action.payload;
      localStorage.setItem(WHISKY_LIST_VIEW_KEY, action.payload);
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    initState: (state) => {
      state.view = localStorage.getItem(WHISKY_LIST_VIEW_KEY) as ListViewType;
      state.limit = 20;
      state._inited = true;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchWhiskyList.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(
        fetchWhiskyList.fulfilled,
        (state, action: PayloadAction<Whisky[]>) => {
          state.isLoading = false;
          whiskyAdapter.addMany(state, action.payload);
          state.hasMore = action.payload.length === state.limit;
        }
      )
      .addCase(fetchWhiskyList.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { reducer: whiskyPageReducer, actions: whiskyPageActions } =
  whiskyPageSlice;
