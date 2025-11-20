import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { Input } from "./Input";

export default {
  title: "shared/Input",
  component: Input,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const PrimaryLight = Template.bind({});
PrimaryLight.args = {
  value: "Some text",
  placeholder: "Some placeholder",
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  value: "Some text",
  placeholder: "Some placeholder",
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
