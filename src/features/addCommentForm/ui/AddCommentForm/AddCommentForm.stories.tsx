import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";
import AddCommentForm from "./AddCommentForm";
import { Theme } from "app/providers/ThemeProvider";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";

export default {
  title: "features/AddCommentForm",
  component: AddCommentForm,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof AddCommentForm>;

const Template: ComponentStory<typeof AddCommentForm> = (args) => (
  <AddCommentForm {...args} />
);

export const Light = Template.bind({});
Light.args = {
  onSendComment: action("onSendComment"),
};
Light.decorators = [StoreDecorator({})];

export const Dark = Template.bind({});
Dark.args = {
  onSendComment: action("onSendComment"),
};
Dark.decorators = [StoreDecorator({}), ThemeDecorator(Theme.DARK)];

export const LightLoading = Template.bind({});
LightLoading.args = {
  isLoading: true,
  onSendComment: action("onSendComment"),
};
LightLoading.decorators = [StoreDecorator({})];

export const DarkLoading = Template.bind({});
DarkLoading.args = {
  isLoading: true,
  onSendComment: action("onSendComment"),
};
DarkLoading.decorators = [StoreDecorator({}), ThemeDecorator(Theme.DARK)];
