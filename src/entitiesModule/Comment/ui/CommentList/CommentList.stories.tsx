import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import avatar from "shared/assets/tests/storybook.png";
import { CommentList } from "./CommentList";
import { Theme } from "app/providers/ThemeProvider";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";

export default {
  title: "entities/Comment/CommentList",
  component: CommentList,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args) => (
  <CommentList {...args} />
);

export const PrimaryLight = Template.bind({});
PrimaryLight.args = {
  comments: [
    {
      id: "1",
      text: "hello world",
      user: {
        id: "1",
        username: "Vasya",
        avatar: avatar,
      },
      createdAt: 1,
    },
    {
      id: "2",
      text: "Comment 2",
      user: {
        id: "1",
        username: "Petya",
        avatar: avatar,
      },
      createdAt: 1,
    },
  ],
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  comments: [
    {
      id: "1",
      text: "hello world",
      user: { id: "1", username: "Vasya", avatar: avatar },
      createdAt: 1,
    },
    {
      id: "2",
      text: "Comment 2",
      user: { id: "1", username: "Petya", avatar: avatar },
      createdAt: 1,
    },
  ],
};

PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
