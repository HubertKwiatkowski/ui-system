// TextField.stories.tsx
import { Meta, Story } from "@storybook/preact";
import { h } from "preact";
import { TextField } from "./TextField";
import { Error, Cancel, MagGlass } from '../../icons'
import * as React from "preact/compat";


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
  <TextField 
    iconLeft={<MagGlass />}
    iconCancel={<Cancel />}
    iconError={<Error />}
    {...args} 
    onChange={() => {}}
  >
    
  </TextField>
);

MultiTextField.args = {
  id: "id",
  name: "name",
  type: "text",
  label: "Input Label",
  placeholder: "Placeholder",
  value: "",
  hint: "",
  error: "",
  moving: false,
  withIcon: false,
  disabled: false,
}