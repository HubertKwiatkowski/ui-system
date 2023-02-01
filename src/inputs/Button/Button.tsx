import { PropsWithChildren } from "preact/compat";
import { h } from "preact";

import * as styles from "./Button.module.css";
import { Plus, Spinner } from "../../assets"


interface ButtonProps {
  onClick(): void;
  variant?: "primary" | "secondary";
  disabled?: boolean;
  isLoading?: boolean;
  icon?: boolean;
}

export const Button = ({
  variant = "primary",
  disabled = false,
  isLoading = false,
  icon = false,
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

  // cons for icon

  const getIconClassForSpecificVariant = ():string => {
    return icon === true
      ? styles.iconShow
      : styles.iconHide
  };

  const getIfIsSpinner = ():string => {
    return isLoading && !disabled === true
      ? styles.iconSpinner
      : styles.iconPlus
  }

  const iconType = 
    isLoading && !disabled === true ? Spinner : Plus;

  const getButtonVariant = (): string => {
    if (!disabled) {
      return variant === "primary"
        ? styles.iconPrimary
        : styles.iconSecondary;
    }
  };

  const iconClasses = [
    styles.iconTemplate,
    getIconClassForSpecificVariant(),
    getIfIsSpinner(),
    getButtonVariant(),
  ].join(" ")

  return (
    <button
      type="button"
      onClick={props.onClick}
      disabled={disabled}
      variant={"primary"}
      className={dynamicClasses}
    >
      <object type="image/svg+xml" data={ iconType } className={iconClasses}>
      </object>
      {props.children}
    </button>
  );
};
