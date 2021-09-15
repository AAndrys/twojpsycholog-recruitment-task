import React, { FC } from "react";
import Image from "next/image";

import * as Styled from "./Hero.styles";

interface HeroProps {}

const Hero: FC<HeroProps> = () => {
  return (
    <Styled.HeroWrapper>
      <Styled.Content>
        <Styled.TextSideContainer>
          <Styled.Title>TheFutureTalks Conference</Styled.Title>
        </Styled.TextSideContainer>
        <Styled.ImageSideContainer>
          <img
            src="/images/imagesMosaic.png"
            alt="mosaic"
            // width={635}
            // height={588}
          />
        </Styled.ImageSideContainer>
      </Styled.Content>
    </Styled.HeroWrapper>
  );
};

export default Hero;
