import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { PageLoader } from "./PageLoader";

export default {
  title: "widgets/PageLoader",
  component: PageLoader,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof PageLoader>;

const Template: ComponentStory<typeof PageLoader> = (args) => (
  <PageLoader {...args} />
);

export const PrimaryLight = Template.bind({});
PrimaryLight.args = {};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
