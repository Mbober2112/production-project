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

export const Light = Template.bind({});
Light.args = {
  children: "Text",
};

export const Dark = Template.bind({});
Dark.args = {
  children: "Text",
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

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

export const DisabledLight = Template.bind({});
DisabledLight.args = {
  children: "Text",
  disabled: true,
};

export const DisabledDark = Template.bind({});
DisabledDark.args = {
  children: "Text",
  disabled: true,
};
DisabledDark.decorators = [ThemeDecorator(Theme.DARK)];

export const PrimaryLight = Template.bind({});
PrimaryLight.args = {
  children: "Text",
  theme: ButtonTheme.PRIMARY,
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  children: "Text",
  theme: ButtonTheme.PRIMARY,
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
