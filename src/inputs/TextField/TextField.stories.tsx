// TextField.stories.tsx
import { Meta, Story } from "@storybook/preact";
import { h } from "preact";
import { TextField } from "./TextField";

export default {
  component: TextField,
  argTypes: {
    type: {
      options: ["text", "password"],
      control: { type: "select" },
    },
  },
} as Meta;

export const MultiTextField: Story = (args) => (
  <TextField {...args} onChange={() => {}}>
    nana
  </TextField>
);

MultiTextField.args = {
  id: "id",
  name: "name",
  disabled: false,
  placeholder: "placeholder",
  value: "",
  type: "text",
  label: "Input Label",
  error: "",
  hint: "",
  moving: false,
}