// Link.stories.tsx
import { Meta, Story } from "@storybook/preact";
import * as React from "react";
import { Link } from "./Link";
import { Plus } from "../../icons";

export default {
  component: Link,
  argTypes: {
    target: {
      options: ["_blank", "_self", "_parent", "_top"],
      control: { type: "select" },
    },
    icon: {
      options: ["none", "plus"],
      mapping: {
        none: "",
        plus: <Plus />,
      },
      control: { type: "select" },
    },
  },
} as Meta;

export const LinkElement: Story = (args) => (
  <Link {...args}>
    Link
  </Link>
);

LinkElement.args = {
  to: "/",
  id: "link-00",
  target: "_blank",
  disabled: false,
  icon: "none",
  onClick: false,
};
