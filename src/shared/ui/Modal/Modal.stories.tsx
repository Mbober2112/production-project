import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { Modal } from "./Modal";

export default {
  title: "shared/Modal",
  component: Modal,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const PrimaryLight = Template.bind({});
PrimaryLight.args = { children: "Text", isOpen: true };

export const PrimaryDark = Template.bind({});
PrimaryDark.args = { children: "Text", isOpen: true };
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
