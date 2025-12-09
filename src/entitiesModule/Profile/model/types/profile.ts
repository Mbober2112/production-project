import { Countries } from "entitiesModule/Country";

export enum ValidateProfileError {
  INCORRECT_FIRSTNAME = "INCORRECT_FIRSTNAME",
  INCORRECT_LASTNAME = "INCORRECT_LASTNAME",
  INCORRECT_CITY = "INCORRECT_CITY",
  INCORRECT_AVATAR_LINK = "INCORRECT_AVATAR_LINK",
  NO_DATA = "NO_DATA",
  SERVER_ERROR = "SERVER_ERROR",
}

export interface Profile {
  firstname?: string;
  lastname?: string;
  dateOfBirth?: number;
  country?: Countries;
  city?: string;
  username?: string;
  avatar?: string;
  id?: string;
}

export interface ProfileSchema {
  data?: Profile;
  form?: Profile;
  isLoading: boolean;
  error?: string;
  readonly: boolean;
  validateErrors?: ValidateProfileError[];
}
