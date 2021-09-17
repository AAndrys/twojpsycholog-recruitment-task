import React, { FC } from "react";
import { v4 as uuidv4 } from "uuid";

import * as Styled from "./Hero.styles";
import Box from "components/Box/Box";
import { BOX_DATA } from "./DATA";

export interface HeroProps {}

const Hero: FC<HeroProps> = () => {
  return (
    <Styled.HeroWrapper>
      <Styled.Content>
        <Styled.InfoSideContainer>
          <Styled.Heading>TheFutureTalks Conference</Styled.Heading>
          <Styled.Paragraph>
            Event madness gathering innovators, startups
            <br />
            {"&"} tech enthusiasts in Special Region of Yogyakarta
          </Styled.Paragraph>
          <Styled.InfoBox>
            {BOX_DATA.map(
              (
                {
                  buttonText,
                  buttonTextWidth,
                  buttonWidth,
                  isFilled,
                  title,
                  description,
                },
                index
              ) => (
                <Box
                  key={uuidv4()}
                  buttonText={buttonText}
                  buttonTextWidth={buttonTextWidth}
                  buttonWidth={buttonWidth}
                  isFilled={isFilled}
                  title={title}
                  description={description}
                  isSecond={index === 1}
                />
              )
            )}
          </Styled.InfoBox>
        </Styled.InfoSideContainer>

        <Styled.ImageSideContainer>
          <Styled.MozaicImage
            src="/images/imagesMosaic.webp"
            width={0}
            height={0}
            alt="mosaic"
            loading="lazy"
          />
        </Styled.ImageSideContainer>
      </Styled.Content>
    </Styled.HeroWrapper>
  );
};

export default Hero;
