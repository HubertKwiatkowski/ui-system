import { PropsWithChildren, useState } from "preact/compat";
import { h } from "preact";

import * as styles from "./TextField.module.css";

interface TextFieldProps {
  type?: "text" | "password";
  autoFocus?: boolean
  disabled?: boolean;
  value: string;
  label?: string;
  name: string;
  placeholder?: string;
  error?: string;
  hint?: string;
  id: string;
  onChange(): void;
  moving?: boolean;
}

export const TextField = (props: TextFieldProps) => {

  const [ focused, setFocus ] = useState(false)

  const labelTop = styles.inputLabelTop
  const labelInside = styles.inputLabelInside

  const labelClass = 
    props.moving
      ? (!!props.value || props.placeholder || focused
        ? labelTop
        : labelInside)
      : labelTop

  const errorInputClass = !!props.error ? styles.inputError : ""

  const focuseLabel = focused ? styles.focusedLabel : ""
  const focuseWrapper = focused ? styles.focusedWrapper : ""

  const labelDynamicClasses = [
    styles.baseLabel,
    labelClass,
    focuseLabel
  ].join(" ")

  const inputDynamicClasses = [
    styles.inputWrapper,
    errorInputClass,
    focuseWrapper
  ].join(" ")

  return (
    <div 
      className={inputDynamicClasses}
    >
      {props.label && (
        <label 
          className={labelDynamicClasses}
          htmlFor={props.id}
        >
            {props.label}
        </label>
      )}
      <input
        id={props.id}
        name={props.name}        
        placeholder={props.placeholder}
        disabled={props.disabled}
        value={props.value}
        type={props.type}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        className={inputDynamicClasses}
        moving={props.moving}
      />
      {props.error && <span className={styles.error}>{props.error}</span>}
      {props.hint && !props.error && (
        <span className={styles.hint}>{props.hint}</span>
      )}
    </div>
  )
}