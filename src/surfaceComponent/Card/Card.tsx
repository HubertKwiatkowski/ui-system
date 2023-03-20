import { PropsWithChildren } from "react";
import * as React from "react";
import imageUrl from "../../static/images/card/card.png";
import * as styles from "./Card.module.css";

interface CardProps {
  fullWidth?: boolean;
}

export const CardImage = () => {
  return (
    <div className={styles.imageWrapper}>
      <img src={imageUrl} alt="placeholder" />
    </div>
  );
};

export const CardContent = (props: PropsWithChildren<object>) => {
  return <div className={styles.cardContent}>{props.children}</div>;
};

export const Card = ({
  fullWidth = false,
  ...props
}: PropsWithChildren<CardProps>) => {
  const getIfFullWidthCard = fullWidth ? styles.fullWidth : "";

  const cardDynamicClasses = [styles.cardWrapper, getIfFullWidthCard].join(" ");

  return <div className={cardDynamicClasses}>{props.children}</div>;
};
