// LabelWrapper.stories.tsx
import React from "react";
import { StoryObj, Meta } from "@storybook/react";

import { LabelWrapper, LabelWrapperProps } from "./LabelWrapper";

export default {
  title: "Labels/LabelWrapper",
  component: LabelWrapper,
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

type Story = StoryObj<typeof LabelWrapper>;

export const Default: Story = {
  args: {
    text: "LabelWrapper",
    color: "blue",
    className: "",
  }
};