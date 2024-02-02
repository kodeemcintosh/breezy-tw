// Modal.stories.tsx
import React from "react";
import { StoryObj, Meta } from "@storybook/react";

import { Modal, ModalProps } from "./Modal";

export default {
  title: "Components/Modal",
  component: Modal,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    className: { control: 'text' },
    children: {
      control: 'array',
    },
  },
};

type Story = StoryObj<typeof Modal>;

export const Base: Story = {
  args: {
    title: "",
    className: "w-96 h-60",
  }
};

export const ModalWithTitle: Story = {
  args: {
    title: "Modal w/ Title",
    className: "w-96 h-60",
  }
};

export const ModalWithTitleAndChildren: Story = {
  args: {
    title: "Modal w/ Title",
    className: "w-96 h-60",
    children: [
      React.createElement('div', { key: "div", className: "flex flex-col w-full h-full px-4 py-2 gap-y-2", children: [
        React.createElement('span', { key: "span-1", className: "flex w-full px-4 py-2 border-2 border-neutral-100" }, "Modal Content"),
        React.createElement('span', { key: "span-2", className: "flex w-full px-4 py-2 border-2 border-neutral-100" }, "Modal Content"),
        React.createElement('span', { key: "span-3", className: "flex w-full px-4 py-2 border-2 border-neutral-100" }, "Modal Content"),
      ] })
    ],
  }
};