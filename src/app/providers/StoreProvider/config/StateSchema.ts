import { EnhancedStore } from "@reduxjs/toolkit";
import { AxiosInstance } from "axios";
import { GameDetailsSchema } from "entitiesModule/Games/model/types/gameDetailsSchema";
import { ProfileSchema } from "entitiesModule/Profile";
import { UserSchema } from "entitiesModule/User";
import { WhiskyDetailsSchema } from "entitiesModule/Whisky";
import { LoginSchema } from "features/AuthByUsername";
import { WhiskyDetailsCommentsSchema } from "pages/WhiskyDetailsPage";
import { NavigateOptions, To } from "react-router-dom";
import { AnyAction, CombinedState, Reducer, ReducersMapObject } from "redux";

export interface StateSchema {
  user: UserSchema;
  //async
  loginForm?: LoginSchema;
  profile?: ProfileSchema;
  whiskyDetails?: WhiskyDetailsSchema;
  whiskyDetailsComments?: WhiskyDetailsCommentsSchema;
  gameDetails?: GameDetailsSchema;
}

export type StateSchemaKey = keyof StateSchema;

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>;
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
  add: (key: StateSchemaKey, reducer: Reducer) => void;
  remove: (key: StateSchemaKey) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager;
}

export interface ThunkExtraArg {
  api: AxiosInstance;
  navigate?: (to: To, options?: NavigateOptions) => void;
}

export interface ThunkConfig<T> {
  rejectValue: T;
  extra: ThunkExtraArg;
  state: StateSchema;
}
