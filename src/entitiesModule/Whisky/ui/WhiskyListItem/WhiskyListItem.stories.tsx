import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { WhiskyListItem } from "./WhiskyListItem";
import { WhiskyType } from "entitiesModule/Whisky/model/types/whisky";
import { Countries } from "entitiesModule/Country";
import { ListViewType } from "shared/const/common";
import DefaultImage from "shared/assets/tests/storybook.png";

const whisky = {
  id: "9",
  title: "Ballantines Finest",
  description: "Some description",
  img: DefaultImage,
  bottler: "George Ballantine & Son",
  type: WhiskyType.SINGLE_MALT,
  country: Countries.SCOTLAND,
  alc: 40,
  raiting: 80,
  rates: 1,
  createdAt: 123456654,
  updatedAt: 123456654,
};

export default {
  title: "entities/WhiskyListItem",
  component: WhiskyListItem,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof WhiskyListItem>;

const Template: ComponentStory<typeof WhiskyListItem> = (args) => (
  <WhiskyListItem {...args} />
);

export const LightBadge = Template.bind({});
LightBadge.args = { whisky, viewType: ListViewType.BADGE };

export const DarkBadge = Template.bind({});
DarkBadge.args = { whisky, viewType: ListViewType.BADGE };
DarkBadge.decorators = [ThemeDecorator(Theme.DARK)];

export const LightList = Template.bind({});
LightList.args = { whisky, viewType: ListViewType.LIST };

export const DarkList = Template.bind({});
DarkList.args = { whisky, viewType: ListViewType.LIST };
DarkList.decorators = [ThemeDecorator(Theme.DARK)];
