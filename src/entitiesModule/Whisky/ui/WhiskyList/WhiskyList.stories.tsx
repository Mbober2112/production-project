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
LightBadge.args = { whiskyList, viewType: ListViewType.BADGE };

export const DarkBadge = Template.bind({});
DarkBadge.args = { whiskyList, viewType: ListViewType.BADGE };
DarkBadge.decorators = [ThemeDecorator(Theme.DARK)];

export const LightList = Template.bind({});
LightList.args = { whiskyList, viewType: ListViewType.LIST };

export const DarkList = Template.bind({});
DarkList.args = { whiskyList, viewType: ListViewType.LIST };
DarkList.decorators = [ThemeDecorator(Theme.DARK)];
