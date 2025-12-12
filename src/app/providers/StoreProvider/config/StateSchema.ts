import { EnhancedStore } from "@reduxjs/toolkit";
import { AxiosInstance } from "axios";
import { CounterSchema } from "entitiesModule/Counter";
import { ProfileSchema } from "entitiesModule/Profile";
import { UserSchema } from "entitiesModule/User";
import { WhiskyDetailsSchema } from "entitiesModule/Whisky";
import { LoginSchema } from "features/AuthByUsername";
import { NavigateOptions, To } from "react-router-dom";
import { AnyAction, CombinedState, Reducer, ReducersMapObject } from "redux";

export interface StateSchema {
  counter: CounterSchema;
  user: UserSchema;
  //async
  loginForm?: LoginSchema;
  profile?: ProfileSchema;
  whiskyDetails?: WhiskyDetailsSchema;
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
