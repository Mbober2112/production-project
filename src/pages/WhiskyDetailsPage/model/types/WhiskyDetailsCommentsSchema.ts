import { EntityState } from "@reduxjs/toolkit";
import { Comment } from "entitiesModule/Comment";

export interface WhiskyDetailsCommentsSchema extends EntityState<Comment> {
  isLoading?: boolean;
  error?: string;
}
