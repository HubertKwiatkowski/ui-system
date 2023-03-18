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

export const CardContent = (props: PropsWithChildren<never, never>) => {
  return (
    <div className={styles.cardContent}>
      <div>
        <h3>Card Name</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
          architecto, autem distinctio dolorem, dolores, esse facere incidunt
          odio officia quasi similique sunt totam unde ut veritatis. A, amet
          aperiam architecto assumenda aut autem commodi consequatur deleniti
          dolorem enim esse excepturi harum illum iure labore minus, modi
          molestiae natus nesciunt non recusandae rem saepe sapiente sint
          temporibus ut vero voluptate. Consequuntur ducimus eius et praesentium
          recusandae. Dolore eaque eius eum excepturi expedita in ipsum laborum
          maiores necessitatibus perspiciatis? Autem beatae, culpa delectus
          dignissimos, dolorem doloremque eaque hic nemo nobis omnis possimus
          quae sint, sit vel veniam! Dignissimos doloribus laudantium provident
          veritatis.
        </p>
      </div>
      <div className={styles.buttonWrapper}>{props.children}</div>
    </div>
  );
};

export const Card = ({
  fullWidth = false,
  ...props
}: PropsWithChildren<CardProps>) => {
  const getIfFullWidthCard = fullWidth ? styles.fullWidth : "";

  const cardDynamicClasses = [styles.cardWrapper, getIfFullWidthCard].join(" ");

  return <div className={cardDynamicClasses}>{props.children}</div>;
};
