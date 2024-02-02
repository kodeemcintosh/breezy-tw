// Badge.stories.tsx
import React from "react";
import { StoryObj, Meta } from "@storybook/react";

import { Badge, BadgeProps } from "./Badge";

export default {
  title: "Components/Badge",
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    color: {
      description: "Color of the badge",
      control: 'select',
      options: ['gray', 'red', 'yellow', 'green', 'blue', 'purple', 'pink'],
    },
    text: { control: 'text' },
    className: { control: 'text' },
  },
};

type Story = StoryObj<typeof Badge>;

export const Base: Story = {
  args: {
    text: "Badge",
    color: "gray",
    className: "",
  }
};

export const Blue: Story = {
  args: {
    text: "Badge",
    color: "blue",
    className: "",
  }
};

export const Purple: Story = {
  args: {
    text: "Badge",
    color: "purple",
    className: "",
  }
};

export const Pink: Story = {
  args: {
    text: "Badge",
    color: "pink",
    className: "",
  }
};

export const Red: Story = {
  args: {
    text: "Badge",
    color: "red",
    className: "",
  }
};

export const Yellow: Story = {
  args: {
    text: "Badge",
    color: "yellow",
    className: "",
  }
};

export const Green: Story = {
  args: {
    text: "Badge",
    color: "green",
    className: "",
  }
};
