import {
  createEntityAdapter,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider";
import {
  Whisky,
  WhiskySortField,
} from "entitiesModule/Whisky/model/types/whisky";
import { ListViewType, SortOrder } from "shared/const/common";
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
    sort: WhiskySortField.TITLE,
    search: "",
    order: "asc",
  }),
  reducers: {
    setView: (state, action: PayloadAction<ListViewType>) => {
      state.view = action.payload;
      localStorage.setItem(WHISKY_LIST_VIEW_KEY, action.payload);
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    setOrder: (state, action: PayloadAction<SortOrder>) => {
      state.order = action.payload;
    },
    setSort: (state, action: PayloadAction<WhiskySortField>) => {
      state.sort = action.payload;
    },
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    initState: (state) => {
      state.view = localStorage.getItem(WHISKY_LIST_VIEW_KEY) as ListViewType;
      state.limit = 20;
      state._inited = true;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchWhiskyList.pending, (state, action) => {
        state.error = undefined;
        state.isLoading = true;

        if (action.meta.arg.replace) {
          whiskyAdapter.removeAll(state);
        }
      })
      .addCase(fetchWhiskyList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.hasMore = action.payload.length === state.limit;

        if (action.meta.arg.replace) {
          whiskyAdapter.setAll(state, action.payload);
        } else {
          whiskyAdapter.addMany(state, action.payload);
        }
      })
      .addCase(fetchWhiskyList.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { reducer: whiskyPageReducer, actions: whiskyPageActions } =
  whiskyPageSlice;
