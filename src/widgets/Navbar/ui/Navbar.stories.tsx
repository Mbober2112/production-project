import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { Navbar } from "./Navbar";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";

export default {
  title: "widgets/Navbar",
  component: Navbar,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const PrimaryLight = Template.bind({});
PrimaryLight.decorators = [
  StoreDecorator({
    loginForm: { login: "123", password: "asd" },
  }),
];

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {};
PrimaryDark.decorators = [
  StoreDecorator({
    loginForm: { login: "123", password: "asd" },
  }),
  ThemeDecorator(Theme.DARK),
];

export const PrimaryLightWithAuthData = Template.bind({});
PrimaryLightWithAuthData.decorators = [
  StoreDecorator({
    loginForm: { login: "123", password: "asd" },
    user: { authData: {} },
  }),
];

export const PrimaryDarkWithAuthData = Template.bind({});
PrimaryDarkWithAuthData.args = {};
PrimaryDarkWithAuthData.decorators = [
  StoreDecorator({
    loginForm: { login: "123", password: "asd" },
    user: { authData: {} },
  }),
  ThemeDecorator(Theme.DARK),
];
