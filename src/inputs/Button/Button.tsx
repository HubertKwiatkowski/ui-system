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
  // icon = "none",
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

  // const icon = (): string => {
  //   return isLoading
  //     ? "spinner"
  //     : "plus"
  //   }
  // };

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

  // const getIconClassForSpecificVariant = ():string => {
  //   return icon ? styles.iconShow : styles.iconHide
  // };

  // const getIfIsSpinner = ():string => {
  //   return isLoading && !disabled ? styles.iconSpinner : styles.iconPlus
  // }

  // const getButtonVariant = (): string => {
  //   if (!disabled) {
  //     return variant === "primary"
  //       ? styles.iconPrimary
  //       : styles.iconSecondary;
  //   }
  // };

  // const iconClasses = [
  //   styles.iconTemplate,
  //   getIconClassForSpecificVariant(),
  //   getIfIsSpinner(),
  //   getButtonVariant(),
  // ].join(" ")


  return (
    <button
      type="button"
      onClick={props.onClick}
      disabled={disabled}
      variant={"primary"}
      className={dynamicClasses}
    >
      {props.icon}
      {props.children}
    </button>
  );
};
