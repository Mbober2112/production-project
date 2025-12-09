import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { DateInput } from "./DateInput";

export default {
  title: "shared/DateInput",
  component: DateInput,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof DateInput>;

const Template: ComponentStory<typeof DateInput> = (args) => (
  <DateInput {...args} />
);

export const PrimaryLight = Template.bind({});
PrimaryLight.args = {
  value: 651110400000,
  placeholder: "Some placeholder",
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  value: 651110400000,
  placeholder: "Some placeholder",
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
