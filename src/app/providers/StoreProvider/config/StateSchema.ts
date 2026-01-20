import { EnhancedStore } from "@reduxjs/toolkit";
import { AxiosInstance } from "axios";
import { GameDetailsSchema } from "entitiesModule/Games/model/types/gameDetailsSchema";
import { ProfileSchema } from "entitiesModule/Profile";
import { UserSchema } from "entitiesModule/User";
import { WhiskyDetailsSchema } from "entitiesModule/Whisky";
import { AddCommentFormSchema } from "features/addCommentForm";
import { LoginSchema } from "features/AuthByUsername";
import { ScrollSaveSchema } from "features/scrollSave";
import { WhiskyDetailsCommentsSchema } from "pages/WhiskyDetailsPage";
import { WhiskyPageSchema } from "pages/WhiskyPage";
import { AnyAction, CombinedState, Reducer, ReducersMapObject } from "redux";

export interface StateSchema {
  user: UserSchema;
  scrollSave: ScrollSaveSchema;
  //async
  loginForm?: LoginSchema;
  profile?: ProfileSchema;
  whiskyDetails?: WhiskyDetailsSchema;
  whiskyDetailsComments?: WhiskyDetailsCommentsSchema;
  gameDetails?: GameDetailsSchema;
  addCommentForm?: AddCommentFormSchema;
  whiskyPage?: WhiskyPageSchema;
}

export type StateSchemaKey = keyof StateSchema;
export type MountedReducers = OptionalRecord<StateSchemaKey, boolean>;

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>;
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
  add: (key: StateSchemaKey, reducer: Reducer) => void;
  remove: (key: StateSchemaKey) => void;
  getMountedReducers: () => MountedReducers;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager;
}

export interface ThunkExtraArg {
  api: AxiosInstance;
}

export interface ThunkConfig<T> {
  rejectValue: T;
  extra: ThunkExtraArg;
  state: StateSchema;
}
