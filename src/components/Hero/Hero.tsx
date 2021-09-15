import React, { FC } from "react";
import { v4 as uuidv4 } from "uuid";

import * as Styled from "./Hero.styles";
import Box from "components/Box/Box";

export interface HeroProps {}

const BOX_DATA = [
  {
    buttonText: "Conference",
    buttonTextWidth: [{ x: 92 }, { x: 103 }],
    buttonWidth: [{ x: 167 }, { x: 195 }],
    isFilled: true,
    title: "18 November 2019",
    description: "25+ top notch speakers @ Sebostudio Gallery Kreavi",
  },
  {
    buttonText: "Startup Awards",
    buttonTextWidth: [{ x: 125 }, { x: 140 }],
    buttonWidth: [{ x: 200 }, { x: 232 }],
    isFilled: false,
    title: "100+ startups",
    description:
      "Top 8 startups competing in final @ TheFutureTalks Conference 2019",
  },
];

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
          <Styled.MozaicImage src="/images/imagesMosaic.png" alt="mosaic" />
        </Styled.ImageSideContainer>
      </Styled.Content>
    </Styled.HeroWrapper>
  );
};

export default Hero;
