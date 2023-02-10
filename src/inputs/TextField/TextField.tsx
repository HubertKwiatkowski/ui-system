import { PropsWithChildren } from "preact/compat";
import { h } from "preact";

import * as styles from "./TextField.module.css";

interface TextFieldProps {
  disabled?: boolean;
  value: string;
  name: string;
  label: string;
  placeholder: string;
  error: string;
  hint: string;
  onChange(): void;
  type?: "text" | "password";
  id: string;
}

export const TextField = ({
  disabled = false,
  value = "value",
  name = "name",
  label = "label",
  placeholder = "placeholder",
  error = "error",
  hint = "hint",
  type = "text",
  id = "id",
  ...props
}: PropsWithChildren<TextFieldProps>) => {

  const dynamicClasses = [
    styles.template
  ].join(" ")

  return (
    <input
      disabled = {disabled}
      value = {"value"}
      name = "name"
      label = "label"
      placeholder="placeholder"
      error={"error"}
      type={"text"}
      hint="hint"
      id="id"
      onChange={props.onChange}
      className={dynamicClasses}
    >
      {props.children}
    </input>
  )
}