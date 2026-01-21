import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { Page } from "./Page";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";

export default {
  title: "shared/Page",
  component: Page,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Page>;

const Template: ComponentStory<typeof Page> = (args) => <Page {...args} />;

export const Light = Template.bind({});
Light.args = {
  children: "Some children",
};
Light.decorators = [StoreDecorator({ scrollSave: { scroll: {} } })];

export const Dark = Template.bind({});
Dark.args = { children: "Some children" };
Dark.decorators = [
  StoreDecorator({ scrollSave: { scroll: {} } }),
  ThemeDecorator(Theme.DARK),
];
