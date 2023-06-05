import * as React from "react";
import { PropsWithChildren, useState } from "react";
import { ArrowUp, ArrowDown } from "../../icons";

import * as styles from "./Accordion.module.css";

interface AccordionProps {
  header: string;
  defaultOpen: boolean;
}

export const Accordion = ({
  defaultOpen,
  ...props
}: PropsWithChildren<AccordionProps>) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div
      className={styles.accordionWrapper}
      onClick={() => {
        setIsOpen(!isOpen);
      }}
    >
      <div className={styles.accordionHeader}>
        <h3>{props.header}</h3>
        <div>{isOpen ? <ArrowUp /> : <ArrowDown />}</div>
      </div>
      <p className={isOpen ? "" : styles.hide}>{props.children}</p>
    </div>
  );
};
