import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { CountrySelect } from "./CountrySelect";
import { Countries } from "../model/types/country";

export default {
  title: "shared/CountrySelect",
  component: CountrySelect,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof CountrySelect>;

const Template: ComponentStory<typeof CountrySelect> = (args) => (
  <CountrySelect {...args} />
);

export const PrimaryLight = Template.bind({});
PrimaryLight.args = {
  value: Countries.RUSSIA,
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  value: Countries.RUSSIA,
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
