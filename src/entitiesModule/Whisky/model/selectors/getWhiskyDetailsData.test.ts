import { StateSchema } from "app/providers/StoreProvider";
import { Countries } from "entitiesModule/Country";
import { WhiskyType } from "../types/whisky";
import { getWhiskyDetailsData } from "./whiskyDetailsSelectors";

describe("getWhiskyDetailsData", () => {
  test("should return whisky details data", () => {
    const state: DeepPartial<StateSchema> = {
      whiskyDetails: {
        data: {
          id: "4",
          title: "Loch Lomond Single Malt 12 Years Old",
          description: "Some description",
          img: "https://static.decanter.ru/upload/images/409607/409607-viski-loch-lomond-single-malt-12-years-old-0-7-l-sq.jpg",
          bottler: "Distillery Bottling",
          distillery: "Loch Lomond",
          statedAge: 12,
          type: WhiskyType.SINGLE_MALT,
          country: Countries.SCOTLAND,
          alc: 46,
          createdAt: 123456654,
          updatedAt: 123456654,
        },
      },
    };
    expect(getWhiskyDetailsData(state as StateSchema)).toEqual({
      id: "4",
      title: "Loch Lomond Single Malt 12 Years Old",
      description: "Some description",
      img: "https://static.decanter.ru/upload/images/409607/409607-viski-loch-lomond-single-malt-12-years-old-0-7-l-sq.jpg",
      bottler: "Distillery Bottling",
      distillery: "Loch Lomond",
      statedAge: 12,
      type: WhiskyType.SINGLE_MALT,
      country: Countries.SCOTLAND,
      alc: 46,
      createdAt: 123456654,
      updatedAt: 123456654,
    });
  });

  test("should work with empty state", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getWhiskyDetailsData(state as StateSchema)).toEqual(undefined);
  });
});
