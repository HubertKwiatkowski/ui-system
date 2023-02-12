import { PropsWithChildren, useState } from "preact/compat";
import { h } from "preact";
import { Error, Cancel, MagGlass } from '../../icons'


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
  withIcon?: boolean;
}

export const TextField = (props: TextFieldProps) => {

  const [ focused, setFocus ] = useState(false)

  const labelTop = styles.inputLabelTop
  const labelInside = styles.inputLabelInside

  const labelClass = !!props.value || props.placeholder || focused ? labelTop : labelInside


  const errorInputClass = !!props.error ? styles.inputError : ""

  const focusLabel = focused && !props.error ? styles.focusedLabel : ""
  const focusWrapper = focused && !props.error ? styles.focusedWrapper : ""

  const errorLabel = props.error && !props.disabled ? styles.errorLabel : ""
  const errorWrapper = props.error && !props.disabled ? styles.errorWrapper : ""


  const inputWithIcon = props.withIcon ? styles.inputWrapperWitchIcon : ""

  const inputDisasbledLabel = props.disabled ? styles.labelDisabled : ""
  const inputDisasbledInput = props.disabled ? styles.inputDisabled : ""

  const labelDynamicClasses = [
    styles.baseLabel,
    labelClass,
    focusLabel,
    errorLabel,
    inputDisasbledLabel,
  ].join(" ")

  const inputDynamicClasses = [
    styles.inputWrapper,
    errorInputClass,
    focusWrapper,
    errorWrapper,
    inputWithIcon,
    inputDisasbledInput,
  ].join(" ")

  const iconLeftClasses = [
    styles.baseIcon,
    styles.leftIcon,
  ].join(" ")

  const iconRightClasses = [
    styles.baseIcon,
    styles.rightIcon
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
      <div>
        {props.withIcon &&
            <span className={iconLeftClasses}>
            {<MagGlass />}
          </span>
        }
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
          // moving={props.moving}
        />
        {props.error && !props.disabled && 
          <span className={iconRightClasses}>
          {<Error />}
        </span>
        }
        {focused && !props.disabled && !props.error &&
          <span className={iconRightClasses}>
          {<Cancel />}
        </span>
        }
      </div>
      {props.error && !props.disabled && <span className={styles.error}>{props.error}</span>}
      {((props.hint && !props.error) || (props.hint && props.disabled)) && (
        <span className={styles.hint}>{props.hint}</span>
      )}
    </div>
  )
}