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
  animated?: boolean
}

export const TextField = (props: TextFieldProps) => {

  const [ focused, setFocus ] = useState(false)

  const labelActiveClass = 
    !!props.value || props.placeholder || focused
      ? styles.inputLabelActive
      : styles.inputLabelInactive

  const errorInputClass = !!props.error ? styles.inputError : ""

  const labelDynamicClasses = [
    styles.baseLabel,
    labelActiveClass,
  ].join(" ")

  const inputDynamicClasses = [
    styles.inputWrapper,
    errorInputClass,
  ].join(" ")

  return (
    <div className={inputDynamicClasses}>
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
      />
      {props.error && <span className={styles.error}>{props.error}</span>}
      {props.hint && !props.error && (
        <span className={styles.hint}>{props.hint}</span>
      )}
    </div>
  )
}