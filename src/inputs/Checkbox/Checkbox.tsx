import * as React from "react";
import { PropsWithChildren, useState } from "react";
import * as styles from "./Checkbox.module.css";

interface CheckboxProps {
  onChange(): void;
  id: string;
  name: string;
  value: string;
  label: string;
  checked?: boolean;
  disabled?: boolean;
}

export const Checkbox = ({
  // checked = false,
  disabled = false,
  id = "id",
  name = "name",
  value = "value",
  label = "label",
  ...props
}: PropsWithChildren<CheckboxProps>) => {
  const [checked, setChecked] = useState(false);

  const getIfDisabled = (): string => {
    return disabled ? styles.disabled : "";
  };

  const classes = [styles.checkboxLabel, getIfDisabled()].join(" ");

  return (
    <label className={classes}>
      <input
        type="checkbox"
        disabled={disabled}
        onChange={() => {
          if (disabled) return;
          setChecked(!checked);
          props.onChange();
        }}
        checked={checked}
        id={id}
        name={name}
        value={value}
      />
      {label}
    </label>
  );
};
