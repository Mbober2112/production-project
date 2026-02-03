import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { WhiskyCaskType } from "entitiesModule/Whisky/model/types/whisky";
import { WhiskyCaskTypeTabs } from "./WhiskyCaskTypeTabs";

export default {
  title: "entities/WhiskyCaskTypeTabs",
  component: WhiskyCaskTypeTabs,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof WhiskyCaskTypeTabs>;

const Template: ComponentStory<typeof WhiskyCaskTypeTabs> = (args) => (
  <WhiskyCaskTypeTabs {...args} />
);

export const Light = Template.bind({});
Light.args = { selectedType: WhiskyCaskType.ALL };

export const Dark = Template.bind({});
Dark.args = { selectedType: WhiskyCaskType.ALL };
Dark.decorators = [ThemeDecorator(Theme.DARK)];
