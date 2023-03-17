import { PropsWithChildren } from "react";
import * as React from "react";
import { Button } from "../../inputs";
import imageUrl from "../../static/images/card/card.png";
import * as styles from "./Card.module.css";

interface CardProps {
  fullWidth?: boolean;
}

interface CardContentProps {
  header: string;
  para: string;
}

export const CardImage = () => {
  return <img src={imageUrl} alt="" />;
};

export const CardContent = ({
  header = "Card Name",
  para = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim harum\n" +
    "          porro sunt nulla natus iusto necessitatibus debitis rem consequuntur\n" +
    "          repellendus, illum quae. Tempora quis dolor sunt, earum, amet\n" +
    "          repellat tenetur dicta porro ab voluptatum, animi ex aliquid\n" +
    "          corporis quas quasi iusto in eos odit similique facere tempore\n" +
    "          deserunt impedit exercitationem. Nesciunt deleniti perspiciatis\n" +
    "          labore modi, neque distinctio pariatur quisquam officiis fugiat ut\n" +
    "          voluptatem dolores assumenda facere molestiae omnis, ducimus error\n" +
    "          animi eius praesentium doloremque possimus minus. Blanditiis\n" +
    "          voluptates magnam sunt voluptatem enim hic reprehenderit, nam\n" +
    "          obcaecati tenetur architecto recusandae sit libero, laboriosam nemo\n" +
    "          iusto ad repellendus. In ad maiores id?",
  ...props
}: PropsWithChildren<CardContentProps>) => {
  // const getIfFullWidthCard = fullWidth ? styles.fullWidth : "";
  //
  // const getIfFullWidhtCardContent = fullWidth
  //   ? styles.fullWidthCardContent
  //   : "";

  // const getIfFullWidthButtonWrapper = fullWidth
  //   ? styles.buttonWrapperFullWidth
  //   : "";


  const cardContentDynamicClasses = [
    styles.cardContent,
    // getIfFullWidhtCardContent,
  ].join(" ");

  const buttonWrapperDynamicClasses = [
    styles.buttonWrapper,
    // getIfFullWidthButtonWrapper,
  ].join(" ");

  return (
    <div className={cardContentDynamicClasses}>
      <div>
        <h3>{header}</h3>
        <p>{para}</p>
      </div>
      <div className={buttonWrapperDynamicClasses}>
        {props.children}
      </div>
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
