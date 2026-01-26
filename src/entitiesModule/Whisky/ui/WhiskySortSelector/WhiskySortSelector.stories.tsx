import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { WhiskyType } from "entitiesModule/Whisky/model/types/whisky";
import { WhiskySortSelector } from "./WhiskySortSelector";

export default {
  title: "entities/WhiskySortSelector",
  component: WhiskySortSelector,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof WhiskySortSelector>;

const Template: ComponentStory<typeof WhiskySortSelector> = (args) => (
  <WhiskySortSelector {...args} />
);

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
