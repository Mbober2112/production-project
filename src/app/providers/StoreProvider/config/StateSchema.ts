import { CounterSchema } from "entitiesModule/Counter";
import { UserSchema } from "entitiesModule/User";
import { LoginSchema } from "features/AuthByUsername";

export interface StateSchema {
  counter: CounterSchema;
  user: UserSchema;
  loginForm: LoginSchema;
}
