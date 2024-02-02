// Card.stories.tsx
import React from "react";
import { StoryObj, Meta } from "@storybook/react";

import { Card, CardProps } from "./Card";

export default {
  title: "Components/Card",
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    className: { control: 'text' },
    children: {
      control: 'array',
    },
  },
};

type Story = StoryObj<typeof Card>;

export const Base: Story = {
  args: {
    title: "",
    className: "w-96 h-60",
  }
};

export const CardWithTitle: Story = {
  args: {
    title: "Card w/ Title",
    className: "w-96 h-60",
  }
};

export const CardWithTitleAndChildren: Story = {
  args: {
    title: "Card w/ Title",
    className: "w-96 h-60",
    children: [
      React.createElement('div', { key: "div", className: "flex flex-col w-full h-full px-4 py-2 gap-y-2", children: [
        React.createElement('span', { key: "span-1", className: "flex w-full px-4 py-2 border-2 border-neutral-100" }, "Card Content"),
        React.createElement('span', { key: "span-2", className: "flex w-full px-4 py-2 border-2 border-neutral-100" }, "Card Content"),
        React.createElement('span', { key: "span-3", className: "flex w-full px-4 py-2 border-2 border-neutral-100" }, "Card Content"),
      ] })
    ],
  }
};