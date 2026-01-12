import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import ProfilePageSettings from "./ProfilePageSettings";

export default {
  title: "pages/ui/ProfilePageSettings",
  component: ProfilePageSettings,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof ProfilePageSettings>;

const Template: ComponentStory<typeof ProfilePageSettings> = (args) => (
  <ProfilePageSettings {...args} />
);

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
