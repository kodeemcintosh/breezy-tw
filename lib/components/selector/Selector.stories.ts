// Selector.stories.tsx
import React from "react";
import { StoryObj, Meta } from "@storybook/react";

import { Selector, SelectorProps } from "./Selector";

export default {
  title: "Components/Selector",
  component: Selector,
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'array',
    },
    text: { control: 'text' },
    className: { control: 'text' },
  },
};

type Story = StoryObj<typeof Selector>;

export const Base: Story = {
  args: {
    className: "",
  }
};
