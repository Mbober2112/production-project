import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";
import { ProfileMainCard } from "./ProfileMainCard";
import { Countries } from "entitiesModule/Country";
import avatar from "shared/assets/tests/storybook.png";

const profileDataMock = {
  firstname: "Евгений",
  lastname: "Бобров",
  country: Countries.Russia,
  city: "Нижний Новгород",
  avatar: avatar,
  dateOfBirth: new Date("1990-05-15T00:00:00Z").getTime(),
};

export default {
  title: "features/ProfileMainCard",
  component: ProfileMainCard,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof ProfileMainCard>;

const Template: ComponentStory<typeof ProfileMainCard> = (args) => (
  <ProfileMainCard {...args} />
);

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [StoreDecorator({ profile: { data: profileDataMock } })];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [];
Dark.decorators = [
  StoreDecorator({ profile: { data: profileDataMock } }),
  ThemeDecorator(Theme.DARK),
];

export const LightError = Template.bind({});
LightError.args = {};
LightError.decorators = [StoreDecorator({ profile: { error: "Some error" } })];

export const DarkError = Template.bind({});
DarkError.args = {};
DarkError.decorators = [];
DarkError.decorators = [
  StoreDecorator({ profile: { error: "Some error" } }),
  ThemeDecorator(Theme.DARK),
];

export const LightLoading = Template.bind({});
LightLoading.args = {};
LightLoading.decorators = [StoreDecorator({ profile: { isLoading: true } })];

export const DarkLoading = Template.bind({});
DarkLoading.args = {};
DarkLoading.decorators = [];
DarkLoading.decorators = [
  StoreDecorator({ profile: { isLoading: true } }),
  ThemeDecorator(Theme.DARK),
];
