// Link.stories.tsx
import { Meta, Story } from "@storybook/preact";
import { h } from "preact";
import { Link } from "./Link";

export default {
  component: Link,
  argTypes: {}
} as Meta;

export const LinkElement: Story = (args) => (
  <Link {...args} onClick={() => {}}>
    Link
  </Link>
);

LinkElement.args = {
  to: "/",
  id: "link-00",
  target: "_blank",
  disabled: false
}