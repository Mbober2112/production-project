import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { Text, TextTheme } from "./Text";

export default {
  title: "shared/Text",
  component: Text,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const PrimaryLight = Template.bind({});
PrimaryLight.args = {
  title: "Some title",
  text: "Some long text under title",
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = { title: "Some title", text: "Some long text under title" };
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const PrimaryLightOnlyTitle = Template.bind({});
PrimaryLightOnlyTitle.args = {
  title: "Some title",
};

export const PrimaryDarkOnlyTitle = Template.bind({});
PrimaryDarkOnlyTitle.args = { title: "Some title" };
PrimaryDarkOnlyTitle.decorators = [ThemeDecorator(Theme.DARK)];

export const PrimaryLightOnlyText = Template.bind({});
PrimaryLightOnlyText.args = {
  text: "Some long text under title",
};

export const PrimaryDarkOnlyText = Template.bind({});
PrimaryDarkOnlyText.args = { text: "Some long text under title" };
PrimaryDarkOnlyText.decorators = [ThemeDecorator(Theme.DARK)];

export const LightError = Template.bind({});
LightError.args = {
  title: "Some title",
  text: "Some long text under title",
  theme: TextTheme.ERROR,
};
export const DarkError = Template.bind({});
DarkError.args = {
  title: "Some title",
  text: "Some long text under title",
  theme: TextTheme.ERROR,
};
DarkError.decorators = [ThemeDecorator(Theme.DARK)];
