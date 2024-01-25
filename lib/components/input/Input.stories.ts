// Badge.stories.tsx
import React from "react";
import { StoryObj, Meta } from "@storybook/react";

import { Input, InputProps } from "./Input";
import './Input.css';

export default {
  title: "Input",
  component: Input,
  argTypes: {
    placeholder: { control: 'text' },
    className: { control: 'text' },
  },
};

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: "Placeholder",
    className: "",
  }
};