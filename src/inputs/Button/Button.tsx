import { PropsWithChildren } from "react";
import * as React from "react";

import * as styles from "./Button.module.css";

interface ButtonProps {
  onClick(): void;
  variant?: "primary" | "secondary";
  type?: "button" | "submit";
  disabled?: boolean;
  isLoading?: boolean;
  icon?: JSX.Element;
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
        props.onClick();
      }}
      disabled={disabled}
      className={dynamicClasses}
    >
      {props.icon}
      {props.children}
    </button>
  );
};
