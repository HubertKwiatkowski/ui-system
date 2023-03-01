import { PropsWithChildren } from "react";
import * as React from "react";

import * as styles from "./Avatar.module.css";

interface AvatarProps {
  src: string;
  alt: string;
  size?: 'big' | 'medium' | 'small'
}

export const Avatar = ({
  src = "",
  alt = "",
  size = "big"
}: PropsWithChildren<AvatarProps>) => {

  const variantClass = (): string => {
    if (size==="big") {
      return styles.avatarBig
    } else if (size==="medium") {
      return styles.avatarMedium
    } else if (size==="small") {
      return styles.avatarSmall
    }
  }

  const getNoImageClass = 
    src === "" ? styles.avatarEmpty : ""

  const dynamicClasses = [
    styles.template,
    getNoImageClass,
    variantClass,
  ].join(" ")

  return (
    <img 
      src={src} 
      alt={alt}
      className={dynamicClasses}
    />
  )
}