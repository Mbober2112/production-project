import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { WhiskyTypeTabs } from "./WhiskyTypeTabs";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { WhiskyType } from "entitiesModule/Whisky/model/types/whisky";

export default {
  title: "entities/WhiskyTypeTabs",
  component: WhiskyTypeTabs,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof WhiskyTypeTabs>;

const Template: ComponentStory<typeof WhiskyTypeTabs> = (args) => (
  <WhiskyTypeTabs {...args} />
);

export const Light = Template.bind({});
Light.args = { selectedType: WhiskyType.ALL };

export const Dark = Template.bind({});
Dark.args = { selectedType: WhiskyType.ALL };
Dark.decorators = [ThemeDecorator(Theme.DARK)];
