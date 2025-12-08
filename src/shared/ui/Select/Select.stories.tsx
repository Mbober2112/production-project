import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { Select } from "./Select";

export default {
  title: "shared/Select",
  component: Select,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const PrimaryLight = Template.bind({});
PrimaryLight.args = {
  value: "First value",
  placeholder: "Some placeholder",
  options: [
    { value: "First value", content: "First content" },
    { value: "Second value", content: "Second content" },
    { value: "Third value", content: "Third content" },
  ],
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  value: "First value",
  placeholder: "Some placeholder",
  options: [
    { value: "First value", content: "First content" },
    { value: "Second value", content: "Second content" },
    { value: "Third value", content: "Third content" },
  ],
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
