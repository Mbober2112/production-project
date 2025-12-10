import { ComponentStory, ComponentMeta } from "@storybook/react";
import DefaultImage from "shared/assets/tests/storybook.png";
import { Avatar, AvatarSize } from "./Avatar";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

export default {
  title: "shared/Avatar",
  component: Avatar,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const AvatarSmall = Template.bind({});
AvatarSmall.args = {
  size: AvatarSize.SMALL,
  src: DefaultImage,
};

export const AvatarMedium = Template.bind({});
AvatarMedium.args = {
  size: AvatarSize.MEDIUM,
  src: DefaultImage,
};

export const AvatarLarge = Template.bind({});
AvatarLarge.args = {
  size: AvatarSize.LARGE,
  src: DefaultImage,
};

export const AvatarDefault = Template.bind({});
AvatarDefault.args = {
  size: AvatarSize.LARGE,
};
AvatarDefault.decorators = [ThemeDecorator(Theme.DARK)];
