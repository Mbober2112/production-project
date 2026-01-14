import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { WhiskyType } from "entitiesModule/Whisky/model/types/whisky";
import { Countries } from "entitiesModule/Country";
import { ListViewType } from "shared/const/common";
import DefaultImage from "shared/assets/tests/storybook.png";
import { WhiskyList } from "./WhiskyList";

const whiskyList = new Array(3).fill({
  id: "9",
  title: "Ballantines Finest",
  description: "Some description",
  img: DefaultImage,
  bottler: "George Ballantine & Son",
  type: WhiskyType.SINGLE_MALT,
  country: Countries.SCOTLAND,
  alc: 40,
  createdAt: 123456654,
  updatedAt: 123456654,
});

export default {
  title: "entities/WhiskyList",
  component: WhiskyList,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof WhiskyList>;

const Template: ComponentStory<typeof WhiskyList> = (args) => (
  <WhiskyList {...args} />
);

export const LightBadge = Template.bind({});
LightBadge.args = {
  whiskyList,
  viewType: ListViewType.BADGE,
  isLoading: false,
};

export const DarkBadge = Template.bind({});
DarkBadge.args = { whiskyList, viewType: ListViewType.BADGE, isLoading: false };
DarkBadge.decorators = [ThemeDecorator(Theme.DARK)];

export const LightList = Template.bind({});
LightList.args = { whiskyList, viewType: ListViewType.LIST, isLoading: false };

export const DarkList = Template.bind({});
DarkList.args = { whiskyList, viewType: ListViewType.LIST, isLoading: false };
DarkList.decorators = [ThemeDecorator(Theme.DARK)];

export const LightBadgeSkeleton = Template.bind({});
LightBadgeSkeleton.args = {
  whiskyList,
  viewType: ListViewType.BADGE,
  isLoading: true,
};

export const DarkBadgeSkeleton = Template.bind({});
DarkBadgeSkeleton.args = {
  whiskyList,
  viewType: ListViewType.BADGE,
  isLoading: true,
};
DarkBadgeSkeleton.decorators = [ThemeDecorator(Theme.DARK)];

export const LightListSkeleton = Template.bind({});
LightListSkeleton.args = {
  whiskyList,
  viewType: ListViewType.LIST,
  isLoading: true,
};

export const DarkListSkeleton = Template.bind({});
DarkListSkeleton.args = {
  whiskyList,
  viewType: ListViewType.LIST,
  isLoading: true,
};
DarkListSkeleton.decorators = [ThemeDecorator(Theme.DARK)];
