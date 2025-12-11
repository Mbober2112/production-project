import { getUserAuthData } from "./model/selectors/getUserAuthData/getUserAuthData";
import { getUserMounted } from "./model/selectors/getUserMounted/getUserMounted";
import { userActions, userReducer } from "./model/slice/userSlice";
import type { User, UserSchema } from "./model/types/user";

export {
  userReducer,
  getUserAuthData,
  getUserMounted,
  userActions,
  User,
  UserSchema,
};
