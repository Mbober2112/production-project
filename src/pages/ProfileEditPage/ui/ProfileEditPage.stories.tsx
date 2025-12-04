import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";
import ProfileEditPage from "./ProfileEditPage";

export default {
  title: "pages/ProfileEditPage",
  component: ProfileEditPage,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof ProfileEditPage>;

const Template: ComponentStory<typeof ProfileEditPage> = () => (
  <ProfileEditPage />
);

export const PrimaryLight = Template.bind({});
PrimaryLight.args = {};
PrimaryLight.decorators = [StoreDecorator({})];

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {};
PrimaryDark.decorators = [];
PrimaryDark.decorators = [StoreDecorator({}), ThemeDecorator(Theme.DARK)];
