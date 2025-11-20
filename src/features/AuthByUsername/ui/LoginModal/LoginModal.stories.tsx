import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { LoginModal } from "./LoginModal";

export default {
  title: "features/LoginModal",
  component: LoginModal,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof LoginModal>;

const Template: ComponentStory<typeof LoginModal> = (args) => (
  <LoginModal {...args} />
);

export const PrimaryLight = Template.bind({});
PrimaryLight.args = { isOpen: true };

export const PrimaryDark = Template.bind({});
PrimaryDark.args = { isOpen: true };
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
