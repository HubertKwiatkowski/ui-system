import { PropsWithChildren } from "react";
import * as React from "react";
import { ArrowRight } from "../../icons";

import * as styles from "./ArrowButton.module.css";

interface ArrowRightProps {
  onClick(): void;
  disabled: boolean;
}

export const ArrowRightButton = ({
  disabled = true,
  ...props
}: PropsWithChildren<ArrowRightProps>) => {
  return (
    <button
      className={styles.btn}
      disabled={disabled}
      onClick={() => {
        props.onClick();
      }}
    >
      <ArrowRight />
    </button>
  );
};
