// Label.stories.tsx
import React from "react";
import { StoryObj, Meta } from "@storybook/react";

import { Label, LabelProps } from "./Label";

export default {
  title: "Components/Label",
  component: Label,
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'array',
    },
    text: { control: 'text' },
    className: { control: 'text' },
  },
};

type Story = StoryObj<typeof Label>;

export const Base: Story = {
  args: {
    text: "Label",
    className: "",
  }
};

export const WrapperHorizontal: Story = {
  args: {
    text: "Horizontal:",
    className: "",
    position: "HORIZONTAL",
    children: [React.createElement('span', { key: "span", className: "text-lg" }, 'Value')],
  }
}

export const WrapperVertical: Story = {
  args: {
    text: "Vertical:",
    className: "",
    position: "VERTICAL",
    children: [React.createElement('input', { key: "input", className: "h-8 w-40 text-base", placeholder: "Placeholder" })],
  }
}
