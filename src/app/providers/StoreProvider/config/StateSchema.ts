import { CounterSchema } from "entitiesModule/Counter";
import { UserSchema } from "entitiesModule/User";

export interface StateSchema {
  counter: CounterSchema;
  user: UserSchema;
}
