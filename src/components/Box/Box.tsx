import Button from "components/Button/Button";
import React, { FC } from "react";

import * as Styled from "./Box.styles";

export interface BoxProps {
  buttonText: string;
  buttonTextWidth: Array<{ x: number }>;
  buttonWidth: Array<{ x: number }>;
  isFilled: boolean;
  title: string;
  description: string;
  isSecond?: boolean;
}

const Box: FC<BoxProps> = ({
  buttonText,
  buttonTextWidth,
  buttonWidth,
  isFilled,
  title,
  description,
  isSecond,
}) => {
  return (
    <Styled.BoxWrapper isSecond={isSecond}>
      <Button
        text={buttonText}
        buttonWidth={buttonWidth}
        buttonTextWidth={buttonTextWidth}
        isArrow
        isFilled={isFilled}
      />
      <Styled.DoneImage
        src={"/svgs/done.svg"}
        alt="Done icon"
        width={24}
        height={24}
      />
      <Styled.Title>{title}</Styled.Title>
      <Styled.Description isSecond={isSecond}>{description}</Styled.Description>
    </Styled.BoxWrapper>
  );
};

export default Box;
