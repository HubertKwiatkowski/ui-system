import { PropsWithChildren } from "react";
import * as React from "react";

import * as styles from "./Avatar.module.css";

interface AvatarProps {
  src: string;
  alt: string;
  size?: "big" | "medium" | "small";
}

export const Avatar = ({
  src = "",
  alt = "",
  size = "big"
}: PropsWithChildren<AvatarProps>) => {
  const variantClass = (): string => {
    if (size === "big") {
      return styles.avatarBig;
    } else if (size === "medium") {
      return styles.avatarMedium;
    } else if (size === "small") {
      return styles.avatarSmall;
    }
  };

  const avatarClasses = [
    variantClass(),
    styles.templateAvatar, 
  ].join(" ");

  const defaultAvatarClasses = [
    variantClass(),
    styles.templateDefault,
  ].join(" ")

  return (
    <div className={styles.avatarWrapper}>
      {src 
        ? <img src={src} alt={alt} className={avatarClasses}/>
        : <div className={defaultAvatarClasses}>
            <p >A</p>
          </div>
      }
    </div>
  )
};
