// Badge.stories.tsx
import React from "react";
import { StoryObj, Meta } from "@storybook/react";

import { Input, InputProps } from "./Input";
import './Input.css';

export default {
  title: "Components/Input",
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    placeholder: { control: 'text' },
    className: { control: 'text' },
  },
};

type Story = StoryObj<typeof Input>;

export const Base: Story = {
  args: {
    placeholder: "Placeholder",
    className: "",
  }
};