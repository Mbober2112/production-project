import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { ListViewSwitcher } from "./ListViewSwitcher";
import { ListViewType } from "shared/const/common";

export default {
  title: "widgets/ListViewSwitcher",
  component: ListViewSwitcher,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof ListViewSwitcher>;

const Template: ComponentStory<typeof ListViewSwitcher> = (args) => (
  <ListViewSwitcher {...args} />
);

export const LightListView = Template.bind({});
LightListView.args = { view: ListViewType.LIST };

export const DarkListView = Template.bind({});
DarkListView.args = { view: ListViewType.LIST };
DarkListView.decorators = [ThemeDecorator(Theme.DARK)];

export const LightBadgeView = Template.bind({});
LightBadgeView.args = { view: ListViewType.BADGE };

export const DarkBadgeView = Template.bind({});
DarkBadgeView.args = { view: ListViewType.BADGE };
DarkBadgeView.decorators = [ThemeDecorator(Theme.DARK)];
