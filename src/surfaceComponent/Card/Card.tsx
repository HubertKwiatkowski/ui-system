import { PropsWithChildren } from "react";
import * as React from "react";
import { Button } from "../../inputs";
import smallImage from "../../static/images/card/card-small.png"
import bigImage from "../../static/images/card/card-big.png"
import * as styles from "./Card.module.css";

interface CardProps {
  fullWidth?: boolean;
}

export const Card = ({
  fullWidth = false
}: PropsWithChildren<CardProps>) => {
  
  const imageUrl = fullWidth ? bigImage : smallImage

  const getIfFullWidth = fullWidth ? styles.fullWidth : ""

  const cardDynamicClasses = [
    styles.cardWrapper,
    getIfFullWidth,
  ].join(" ")
  
  return (
    <div className={cardDynamicClasses}>
      
      <img src={imageUrl} alt=""/>
      <div className={styles.cardContent}>
        <div>
          <h3>Card Name</h3>
          <p>Card description goes here and it can be as long as it needs and so on.</p>
        </div>
        <div className={styles.buttonWrapper}>
          <Button variant={"primary"}>Click me</Button>
          <Button variant={"secondary"}>Click me</Button>
        </div>
      </div>
    </div>
  )
}