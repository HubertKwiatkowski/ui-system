import { PropsWithChildren } from "preact/compat";
import { h } from "preact";

import * as styles from "./Checkbox.module.css";

interface CheckboxProps {
  onClick(): void;
  disabled?: boolean;
}

export const Checkbox = ({
  disabled = false,
  ...props
}: PropsWithChildren<CheckboxProps>) => {
  return (
    <div
      onClick={props.onClick}
      disabled={disabled}
      variant={"primary"}
    >
      <input type="checkbox" />
      <label htmlFor="checkboxLabel">{props.children}</label>
    </div>
  )
}