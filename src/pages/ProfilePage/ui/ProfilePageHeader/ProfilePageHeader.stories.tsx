import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import ProfilePageHeader from "./ProfilePageHeader";

export default {
  title: "pages/ui/ProfilePageHeader",
  component: ProfilePageHeader,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof ProfilePageHeader>;

const Template: ComponentStory<typeof ProfilePageHeader> = (args) => (
  <ProfilePageHeader {...args} />
);

export const PrimaryLight = Template.bind({});
PrimaryLight.args = {};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const PrimaryLightCanEdit = Template.bind({});
PrimaryLightCanEdit.args = { canEdit: true };

export const PrimaryDarkCanEdit = Template.bind({});
PrimaryDarkCanEdit.args = { canEdit: true };
PrimaryDarkCanEdit.decorators = [ThemeDecorator(Theme.DARK)];
