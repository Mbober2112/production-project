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

export const Light = Template.bind({});
Light.args = {
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

export const Dark = Template.bind({});
Dark.args = {
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

Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const LightLoading = Template.bind({});
LightLoading.args = {
  isLoading: true,
};

export const DarkLoading = Template.bind({});
DarkLoading.args = {
  isLoading: true,
};

DarkLoading.decorators = [ThemeDecorator(Theme.DARK)];
