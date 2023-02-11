import { PropsWithChildren } from "preact/compat";
import { h } from "preact";

import * as styles from "./Link.module.css";

interface LinkProps {
  to: string;
  id: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
  disabled?: boolean;
  onClick?: () => boolean;
  icon?: h.JSX.Element;
}

export const Link = ({
  to = "/",
  id = "id",
  target = "_blank",
  disabled = false,
  ...props
}: PropsWithChildren<LinkProps>) => {

  const getIfDisabled = (): string => {
    return disabled
      ? styles.disabled
      : ""
  }

  const dynamicClasses = [
    styles.template,
    getIfDisabled()
  ].join(" ")

  return (
    <a 
      href={props.to}
      id="id"
      target="_blank"
      disabled={disabled}
      onClick={props.onClick}
      className={dynamicClasses}
    >
      {props.icon}
      {props.children}
    </a>      
  )
}