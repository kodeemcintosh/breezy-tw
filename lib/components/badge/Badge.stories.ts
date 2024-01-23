// Badge.stories.tsx
import React from "react";
import { StoryObj, Meta } from "@storybook/react";

import { Badge, BadgeProps } from "./Badge";

export default {
  title: "Components/Badge",
  component: Badge,
  // tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: ['gray', 'red', 'yellow', 'green', 'blue', 'purple', 'pink'],
    },
    text: { control: 'text' },
    className: { control: 'text' },
  },
};

type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    text: "Badge",
    color: "blue",
    className: "",
  }
};