import { PropsWithChildren } from "react";
import * as React from "react";
import { useState } from "react";
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
  checked = false,
  disabled = false,
  id = "id",
  name = "name",
  value = "value",
  label = "label",
  ...props
}: PropsWithChildren<CheckboxProps>) => {

  

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
