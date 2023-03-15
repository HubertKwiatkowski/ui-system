import { PropsWithChildren } from "react";
import * as React from "react";
import { Button } from "../../inputs";
import imageUrl from "../../static/images/card/card-big.png";
import * as styles from "./Card.module.css";

interface CardProps {
  onClick(): void;
  fullWidth?: boolean;
}

const CardImage = ({}) => {
  return (
    <img src={imageUrl} alt="" />
  )
}

export const Card = ({ 
  fullWidth = false,
  ...props
}: PropsWithChildren<CardProps>) => {

  const getIfFullWidthCard = fullWidth ? styles.fullWidth : "";

  const getIfFullWidhtCardContent = fullWidth
    ? styles.fullWidthCardContent
    : "";

  const getIfFullWidthButtonWrapper = fullWidth
    ? styles.buttonWrapperFullWidth
    : "";

  const cardDynamicClasses = [styles.cardWrapper, getIfFullWidthCard].join(" ");

  const cardContentDynamicClasses = [
    styles.cardContent,
    getIfFullWidhtCardContent,
  ].join(" ");

  const buttonWrapperDynamicClasses = [
    styles.buttonWrapper,
    getIfFullWidthButtonWrapper,
  ].join(" ");

  return (
    <div className={cardDynamicClasses}>
      <CardImage />
      <div className={cardContentDynamicClasses}>
        <div>
          <h3>Card Name</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim harum
            porro sunt nulla natus iusto necessitatibus debitis rem consequuntur
            repellendus, illum quae. Tempora quis dolor sunt, earum, amet
            repellat tenetur dicta porro ab voluptatum, animi ex aliquid
            corporis quas quasi iusto in eos odit similique facere tempore
            deserunt impedit exercitationem. Nesciunt deleniti perspiciatis
            labore modi, neque distinctio pariatur quisquam officiis fugiat ut
            voluptatem dolores assumenda facere molestiae omnis, ducimus error
            animi eius praesentium doloremque possimus minus. Blanditiis
            voluptates magnam sunt voluptatem enim hic reprehenderit, nam
            obcaecati tenetur architecto recusandae sit libero, laboriosam nemo
            iusto ad repellendus. In ad maiores id?
          </p>
        </div>
        <div className={buttonWrapperDynamicClasses}>
          <div>
            <Button
              type="button"
              variant={"primary"}
              onClick={() => {props.onClick}}
            >
              Primary button
            </Button>
          </div>
          <div>
            <Button
              type="button"
              variant={"secondary"}
              onClick={() => {props.onClick}}
            >
              Secondary button
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
