import { configureStore, ReducersMapObject } from "@reduxjs/toolkit";
import { counterReducer } from "entitiesModule/Counter";
import { userReducer } from "entitiesModule/User";
import { loginReducer } from "features/AuthByUsername";

import { StateSchema } from "./StateSchema";

export function createReduxStore(initialState?: StateSchema) {
  const RootReducer: ReducersMapObject<StateSchema> = {
    counter: counterReducer,
    user: userReducer,
    loginForm: loginReducer,
  };

  return configureStore<StateSchema>({
    reducer: RootReducer,
    devTools: __IS_DEV__,
    preloadedState: initialState,
  });
}
