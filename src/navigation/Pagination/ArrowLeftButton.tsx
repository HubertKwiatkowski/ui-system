import { PropsWithChildren } from "react";
import * as React from "react";
import { ArrowLeft } from "../../icons";

import * as styles from "./ArrowButton.module.css";

interface ArrowLeftProps {
  onClick(): void;
  disabled: boolean;
}

export const ArrowLeftButton = ({
  disabled = true,
  ...props
}: PropsWithChildren<ArrowLeftProps>) => {
  return (
    <button
      className={styles.btn}
      disabled={disabled}
      onClick={() => {
        props.onClick();
      }}
    >
      <ArrowLeft />
    </button>
  );
};
