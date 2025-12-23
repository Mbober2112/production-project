import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";
import { ProfileEditCard } from "./ProfileEditCard";
import { SexTypes } from "entitiesModule/Profile/model/types/profile";
import { Countries } from "entitiesModule/Country";

const profileDataMock = {
  firstname: "Евгений",
  lastname: "Бобров",
  country: Countries.RUSSIA,
  city: "Нижний Новгород",
  avatar: "https://someUrl.com",
  dateOfBirth: new Date("1990-05-15T00:00:00Z").getTime(),
  sex: SexTypes.MALE,
  username: "admin",
  id: "1",
};

export default {
  title: "entities/ProfileEditCard",
  component: ProfileEditCard,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof ProfileEditCard>;

const Template: ComponentStory<typeof ProfileEditCard> = (args) => (
  <ProfileEditCard {...args} />
);

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [StoreDecorator({ profile: { form: profileDataMock } })];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [
  StoreDecorator({ profile: { form: profileDataMock } }),
  ThemeDecorator(Theme.DARK),
];

export const LightError = Template.bind({});
LightError.args = {};
LightError.decorators = [StoreDecorator({ profile: { error: "Some error" } })];

export const DarkError = Template.bind({});
DarkError.args = {};
DarkError.decorators = [
  StoreDecorator({ profile: { error: "Some error" } }),
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
