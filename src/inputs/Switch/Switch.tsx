import { PropsWithChildren } from "preact/compat";
import { h } from "preact";

import * as styles from "./Switch.module.css";


interface SwitchProps {
  checked?: boolean;
  disabled?: boolean;
  onChange(): void;
  id: string;
}

export const Switch = ({
  checked = false,
  disabled = false,
  id = "id",
}: PropsWitchChildren<SwitchProps>) => {

  const getIfDisabledLabel = (): string => {
    return disabled
      ? styles.switchLabelDisabled
      : "";
  };  

  const getIfDisabledSlider = (): string => {
    return disabled
      ? styles.switchSliderDisabled
      : "";
  }; 

  const labelClasses = [
    styles.switchLabel,
    getIfDisabledLabel(),
  ].join(" ")

  const sliderClasses = [
    styles.switchSlider,
    getIfDisabledSlider()
  ].join(" ")

  return (
    <label className={labelClasses}>
      <input 
        type="checkbox" 
        checked={checked}
        disabled={disabled}
        id={id}
      />
      <span className={sliderClasses}></span>
    </label>
  )
}