import { Game } from "./game";

export interface GameDetailsSchema {
  data?: Game;
  isLoading: boolean;
  error?: string;
}
