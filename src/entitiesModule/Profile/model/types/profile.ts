import { Countries } from "entitiesModule/Country";

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
}
