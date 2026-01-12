import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { Switcher } from "./Switcher";

export default {
  title: "shared/Switcher",
  component: Switcher,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Switcher>;

const Template: ComponentStory<typeof Switcher> = (args) => (
  <Switcher {...args} />
);

export const Light = Template.bind({});
Light.args = {
  label: "Some label",
  checked: false,
};

export const LightChecked = Template.bind({});
LightChecked.args = {
  label: "Some label",
  checked: true,
};

export const Dark = Template.bind({});
Dark.args = {
  label: "Some label",
  checked: false,
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const DarkChecked = Template.bind({});
DarkChecked.args = {
  label: "Some label",
  checked: true,
};
DarkChecked.decorators = [ThemeDecorator(Theme.DARK)];
