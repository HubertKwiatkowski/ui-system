import { Meta, Story } from "@storybook/react";
import { Avatar } from "./Avatar";
import * as React from "react";
import avatarIcon from "../../static/images/avatar/1.jpg"

export default {
  component: Avatar,
  argTypes: {
    size: {
      options: ["big", "medium", "small"],
      control: { type: "select" },
    },
  },
} as Meta;

export const MultiAvatar: Story = (args) => <Avatar alt={""} src={""} {...args}></Avatar>;

MultiAvatar.args = {
  src: avatarIcon,
  alt: "Mexican Deathmask",
  size: "big",
};
