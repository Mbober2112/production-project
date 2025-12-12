import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";
import ProfilePage from "./ProfilePage";
import { Countries } from "entitiesModule/Country";
import avatar from "shared/assets/tests/storybook.png";
import { SexTypes } from "entitiesModule/Profile/model/types/profile";

const profileDataMock = {
  firstname: "Евгений",
  lastname: "Бобров",
  country: Countries.RUSSIA,
  city: "Нижний Новгород",
  avatar: avatar,
  dateOfBirth: new Date("1990-05-15T00:00:00Z").getTime(),
  sex: SexTypes.MALE,
};

export default {
  title: "pages/ProfilePage",
  component: ProfilePage,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = () => <ProfilePage />;

export const PrimaryLight = Template.bind({});
PrimaryLight.args = {};
PrimaryLight.decorators = [
  StoreDecorator({ profile: { data: profileDataMock } }),
];

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {};
PrimaryDark.decorators = [
  StoreDecorator({ profile: { data: profileDataMock } }),
  ThemeDecorator(Theme.DARK),
];
