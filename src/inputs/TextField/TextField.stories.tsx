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
  disabled: false,
  placeholder: "Placeholder",
  value: "",
  type: "text",
  label: "Input Label",
  error: "",
  hint: "",
  moving: false,
  withIcon: false,
}