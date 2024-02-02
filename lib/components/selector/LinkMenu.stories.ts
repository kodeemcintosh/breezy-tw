// LinkMenu.stories.tsx
import React from "react";
import { StoryObj, Meta } from "@storybook/react";
import { HiHome, HiArchive, HiBookOpen } from "react-icons/hi";

import { LinkMenu, LinkMenuProps } from "./LinkMenu";

export default {
  title: "Components/LinkMenu",
  component: LinkMenu,
  tags: ['autodocs'],
  argTypes: {
    items: { control: 'array' },
    className: { control: 'text' },
  }
};

type Story = StoryObj<typeof LinkMenu>;

export const Base: Story = {
  args: {
    className: "w-fit",
    items: [
      {
        text: "Link 1",
        href: "#",
        className: "w-40 rounded-md px-2 py-1"
      },
      {
        text: "Link 2",
        href: "#",
        className: "w-40 rounded-md px-2 py-1"
      },
      {
        text: "Link 3",
        href: "#",
        className: "w-40 rounded-md border-t-2 border-gray-200 px-2 py-1",
      },
    ],
    children: [React.createElement("span", { key: "link-menu", className: "" }, "Link Menu")]
  }
};


export const MenuWithIcons: Story = {
  args: {
    className: "w-fit",
    items: [
      {
        text: "Link 1",
        icon: React.createElement(HiHome, { key: "icon", className: "size-5 text-purple-400" }),
        href: "#",
        className: "w-40 rounded-md px-2 py-1"
      },
      {
        text: "Link 2",
        icon: React.createElement(HiBookOpen, { key: "icon", className: "size-5 text-purple-400" }),
        href: "#",
        className: "w-40 rounded-md px-2 py-1"
      },
      {
        text: "Link 3",
        icon: React.createElement(HiArchive, { key: "icon", className: "size-5 text-purple-400" }),
        href: "#",
        className: "w-40 rounded-md px-2 py-1",
      },
    ],
    children: [React.createElement("span", { key: "link-menu", className: "" }, "Menu With Icons")]
  }
};
