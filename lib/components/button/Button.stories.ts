// Button.stories.tsx
import React from "react";
import { StoryObj, Meta } from "@storybook/react";
import { Button, ButtonProps } from "./Button";
import { HiEmojiHappy, HiOutlineLightningBolt } from "react-icons/hi";

export default {
  title: "Components/Button",
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    text: { control: 'text' },
    className: { control: 'text' },
    onClick: { action: 'clicked', type: { required: true } },
  },
};

type Story = StoryObj<typeof Button>;

export const Base: Story = {
  args: {
    text: "Base",
    className: "",
    onClick: () => alert("Base Button Clicked!")
  }
};

export const Disabled: Story = {
  args: {
    text: "Disabled",
    className: "",
    onClick: () => {},
    disabled: true
  }
};

export const Icon: Story = {
  args: {
    className: "p-1 bg-purple-200 hover:bg-purple-300",
    children: [React.createElement(HiEmojiHappy, { key: "icon", className: "size-6" })],
    onClick: () => alert("Icon Button Clicked!")
  }
}


export const TextAndIcon: Story = {
  args: {
    className: "flex text-base",
    text: "Text w/ Icon Button",
    children: [React.createElement(HiOutlineLightningBolt, { key: "icon", className: "size-6 text-yellow-500" })],
    onClick: () => alert("Text w/ Icon Button Clicked!")
  }
}