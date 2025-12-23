import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import avatar from "shared/assets/tests/storybook.png";
import { Theme } from "app/providers/ThemeProvider";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { CommentCard } from "./CommentCard";

export default {
  title: "entities/Comment/CommentCard",
  component: CommentCard,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof CommentCard>;

const Template: ComponentStory<typeof CommentCard> = (args) => (
  <CommentCard {...args} />
);

export const PrimaryLight = Template.bind({});
PrimaryLight.args = {
  comment: {
    id: "1",
    text: "hello world",
    user: {
      id: "1",
      username: "Vasya",
      avatar: avatar,
    },
    createdAt: 1,
  },
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  comment: {
    id: "1",
    text: "hello world",
    user: {
      id: "1",
      username: "Vasya",
      avatar: avatar,
    },
    createdAt: 1,
  },
};

PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
