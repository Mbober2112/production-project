import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import ProfilePageSettings from "./ProfilePageSettings";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";

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
Light.decorators = [StoreDecorator({ profile: { isLoading: false } })];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [
  StoreDecorator({ profile: { isLoading: false } }),
  ThemeDecorator(Theme.DARK),
];

export const LightLoading = Template.bind({});
LightLoading.args = {};
LightLoading.decorators = [StoreDecorator({ profile: { isLoading: true } })];

export const DarkLoading = Template.bind({});
DarkLoading.args = {};
DarkLoading.decorators = [
  StoreDecorator({ profile: { isLoading: true } }),
  ThemeDecorator(Theme.DARK),
];
