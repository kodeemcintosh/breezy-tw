// Button.stories.tsx
import React from "react";
import { StoryObj, Meta } from "@storybook/react";

import { Button, ButtonProps } from "./Button";

export default {
  title: "Button",
  component: Button,
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

type Story = StoryObj<typeof Button>;

export const Base: Story = {
  args: {
    text: "Base Button",
    color: "blue",
    className: "",
  }
};