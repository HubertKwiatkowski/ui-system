import { Meta, Story } from "@storybook/react";
import { Avatar } from "./Avatar"
import * as React from "react";

export default {
  component: Avatar,
  argTypes: {
    size: {
      options: ["big", "medium", "small"],
      control: { type: "select" },
    },
  },
} as Meta

export const MultiAvatar: Story = (args) => (
  <Avatar {...args}></Avatar>
);

MultiAvatar.args = {
  src: "",
  alt: "",
  size: "big",
}