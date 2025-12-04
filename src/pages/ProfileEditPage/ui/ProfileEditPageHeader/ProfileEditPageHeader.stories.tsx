import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import ProfileEditPageHeader from "./ProfileEditPageHeader";

export default {
  title: "pages/ui/ProfileEditPageHeader",
  component: ProfileEditPageHeader,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof ProfileEditPageHeader>;

const Template: ComponentStory<typeof ProfileEditPageHeader> = (args) => (
  <ProfileEditPageHeader {...args} />
);

export const PrimaryLight = Template.bind({});
PrimaryLight.args = {};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
