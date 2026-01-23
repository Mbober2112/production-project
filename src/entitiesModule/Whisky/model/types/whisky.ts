import { Countries } from "entitiesModule/Country";

export enum WhiskyType {
  SINGLE_MALT = "Single Malt",
  BLENDED = "Blended",
  BLENDED_MALT = "Blended Malt",
  SINGLE_GRAIN = "Single Grain",
  BOURBON = "Bourbon",
}

export enum WhiskySortField {
  RATES = "rates",
  RAITING = "raiting",
  TITLE = "title",
}

export interface Whisky {
  id: string;
  title: string;
  type: WhiskyType;
  country: Countries;
  alc: number;
  createdAt: number;
  updatedAt: number;
  description?: string;
  img?: string;
  bottler?: string;
  distillery?: string;
  statedAge?: number;
  raiting?: number;
  rates?: number;
}
