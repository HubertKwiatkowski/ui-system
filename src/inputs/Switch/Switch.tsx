import * as React from "react";
import { PropsWithChildren, useState } from "react";

import * as styles from "./Switch.module.css";

interface SwitchProps {
  checked?: boolean;
  disabled?: boolean;
  onChange(): void;
  id: string;
}

export const Switch = ({
  disabled = false,
  id = "id",
  ...props
}: PropsWithChildren<SwitchProps>) => {
  const [checked, setChecked] = useState(false);

  const getIfDisabledLabel = (): string => {
    return disabled ? styles.switchLabelDisabled : "";
  };

  const getIfDisabledSlider = (): string => {
    return disabled ? styles.switchSliderDisabled : "";
  };

  const labelClasses = [styles.switchLabel, getIfDisabledLabel()].join(" ");

  const sliderClasses = [styles.switchSlider, getIfDisabledSlider()].join(" ");

  return (
    <label className={labelClasses}>
      <input
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={() => {
          if (disabled) return;
          setChecked(!checked);
          props.onChange();
        }}
        id={id}
      />
      <span className={sliderClasses}></span>
    </label>
  );
};
