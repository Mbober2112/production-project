import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { Button, ButtonSize, ButtonTheme } from "./Button";

export default {
  title: "shared/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const PrimaryLight = Template.bind({});
PrimaryLight.args = {
  children: "Text",
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  children: "Text",
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Clear = Template.bind({});
Clear.args = {
  children: "Text",
  theme: ButtonTheme.CLEAR,
};

export const SquareM = Template.bind({});
SquareM.args = {
  children: ">",
  square: true,
  size: ButtonSize.M,
};

export const SquareL = Template.bind({});
SquareL.args = {
  children: ">",
  square: true,
  size: ButtonSize.L,
};
