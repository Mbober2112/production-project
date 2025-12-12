import { Whisky } from "./whisky";

export interface WhiskyDetailsSchema {
  data?: Whisky;
  isLoading: boolean;
  error?: string;
}
