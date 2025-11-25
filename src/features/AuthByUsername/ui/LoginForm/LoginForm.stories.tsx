import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import LoginForm from "./LoginForm";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";

export default {
  title: "features/LoginForm",
  component: LoginForm,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => (
  <LoginForm {...args} />
);

export const PrimaryLight = Template.bind({});
PrimaryLight.args = {};
PrimaryLight.decorators = [
  StoreDecorator({
    loginForm: { login: "123", password: "asd" },
  }),
];

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {};
PrimaryDark.decorators = [];
PrimaryDark.decorators = [
  StoreDecorator({
    loginForm: { login: "123", password: "asd" },
  }),
  ThemeDecorator(Theme.DARK),
];

export const PrimaryLightDisabledButton = Template.bind({});
PrimaryLightDisabledButton.args = {};
PrimaryLightDisabledButton.decorators = [
  StoreDecorator({
    loginForm: { login: "123", password: "asd", isLoading: true },
  }),
];

export const PrimaryDarkDisabledButton = Template.bind({});
PrimaryDarkDisabledButton.args = {};
PrimaryDarkDisabledButton.decorators = [];
PrimaryDarkDisabledButton.decorators = [
  StoreDecorator({
    loginForm: { login: "123", password: "asd", isLoading: true },
  }),
  ThemeDecorator(Theme.DARK),
];

export const PrimaryLightWithError = Template.bind({});
PrimaryLightWithError.args = {};
PrimaryLightWithError.decorators = [
  StoreDecorator({
    loginForm: { login: "123", password: "asd", error: "Some error" },
  }),
];

export const PrimaryDarkWithError = Template.bind({});
PrimaryDarkWithError.args = {};
PrimaryDarkWithError.decorators = [];
PrimaryDarkWithError.decorators = [
  StoreDecorator({
    loginForm: { login: "123", password: "asd", error: "Some error" },
  }),
  ThemeDecorator(Theme.DARK),
];
