import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";
import { Countries } from "entitiesModule/Country";
import { WhiskyType } from "entitiesModule/Whisky/model/types/whisky";
import { WhiskyDetails } from "./WhiskyDetails";

const whiskyDetailsDataMock = {
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
  rating: {
    avg: 75,
    count: 1,
  },
  createdAt: 123456654,
  updatedAt: 123456654,
};

export default {
  title: "entities/WhiskyDetails",
  component: WhiskyDetails,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof WhiskyDetails>;

const Template: ComponentStory<typeof WhiskyDetails> = (args) => (
  <WhiskyDetails {...args} />
);

export const PrimaryLight = Template.bind({});
PrimaryLight.args = { id: "4" };
PrimaryLight.decorators = [
  StoreDecorator({ whiskyDetails: { data: whiskyDetailsDataMock } }),
];

export const PrimaryDark = Template.bind({});
PrimaryDark.args = { id: "4" };
PrimaryDark.decorators = [
  StoreDecorator({ whiskyDetails: { data: whiskyDetailsDataMock } }),
  ThemeDecorator(Theme.DARK),
];
