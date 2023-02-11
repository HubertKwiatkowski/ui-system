import { PropsWithChildren } from "preact/compat";
import { h } from "preact";

import * as styles from "./Button.module.css";


interface ButtonProps {
  onClick(): void;
  variant?: "primary" | "secondary";
  type?: "button" | "submit";
  disabled?: boolean;
  isLoading?: boolean;
  icon?: h.JSX.Element;
}

export const Button = ({
  variant = "primary",
  disabled = false,
  isLoading = false,
  ...props
}: PropsWithChildren<ButtonProps>) => {
  const variantClass =
    variant === "primary" ? styles.primary : styles.secondary;

  const getDisabledClassForSpecificVariant = (): string => {
    if (disabled) {
      return variant === "primary"
        ? styles.disabledPrimary
        : styles.disabledSecondary;
    }
  };

  const getIsLoadingClassForSpecificVariant = (): string => {
    if (isLoading) {
      return variant === "primary"
        ? styles.isLoadingPrimary
        : styles.isLoadingSecondary;
    }
  };

  const dynamicClasses = [
    styles.template,
    variantClass,
    getDisabledClassForSpecificVariant(),
    getIsLoadingClassForSpecificVariant(),
  ].join(" ");

  return (
    <button
      type="button"
      onClick={() => {
        if (disabled) return;
        if (isLoading) return;
        props.onClick()
      }}
      disabled={disabled}
      variant={"primary"}
      className={dynamicClasses}
    >
      {props.icon}
      {props.children}
    </button>
  );
};