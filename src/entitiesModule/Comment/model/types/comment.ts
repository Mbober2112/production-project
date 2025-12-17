import { User } from "entitiesModule/User";

export interface Comment {
  id: string;
  text: string;
  whiskyId?: string;
  user: User;
  createdAt: number;
}
