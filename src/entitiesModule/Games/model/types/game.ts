import { Countries } from "entitiesModule/Country";

export enum GameGenre {
  ACTION = "Action",
}

export enum GameDeveloper {
  ROCKSTAR_STUDIOS = "Rockstar Studios",
}

export enum GamePublisher {
  ROCKSTAR_GAMES = "Rockstar Games",
}

export interface Game {
  id: string;
  title: string;
  description?: string;
  img?: string;
  genre: GameGenre[];
  developer: GameDeveloper;
  publisher: GamePublisher;
  country: Countries;
  releaseDate: number;
  createdAt: number;
  updatedAt: number;
}
