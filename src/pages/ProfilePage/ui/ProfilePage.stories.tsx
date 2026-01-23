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
  username: "admin",
  id: "1",
};

export default {
  title: "pages/ProfilePage",
  component: ProfilePage,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = () => <ProfilePage />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [
  StoreDecorator({
    profile: { data: profileDataMock },
    scrollSave: { scroll: {} },
  }),
];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [
  StoreDecorator({
    profile: { data: profileDataMock },
    scrollSave: { scroll: {} },
  }),
  ThemeDecorator(Theme.DARK),
];
