import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { Textarea } from "./Textarea";

export default {
  title: "shared/Textarea",
  component: Textarea,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Textarea>;

const Template: ComponentStory<typeof Textarea> = (args) => (
  <Textarea {...args} />
);

export const Light = Template.bind({});
Light.args = {
  value: "Some text",
  placeholder: "Some placeholder",
};

export const Dark = Template.bind({});
Dark.args = {
  value: "Some text",
  placeholder: "Some placeholder",
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const LightLongText = Template.bind({});
LightLongText.args = {
  value: "Some text".repeat(100),
  placeholder: "Some placeholder",
};
