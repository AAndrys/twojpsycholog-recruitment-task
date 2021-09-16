import React, { FC } from "react";
import { v4 as uuidv4 } from "uuid";

import * as Styled from "./Speakers.styles";

import { DATA } from "./DATA";
import Tile from "components/Tile/Tile";

export interface SpeakersProps {}

const Speakers: FC<SpeakersProps> = () => {
  return (
    <Styled.SpeakersWrapper>
      <Styled.Container>
        <Styled.Oval>
          <Styled.Title>SPEAKERS</Styled.Title>
        </Styled.Oval>
        <Styled.Headline>TheFutureTalks Speakers</Styled.Headline>
        <Styled.TilesWrapper>
          {DATA.map(({ image, name, description }, index) => (
            <Tile
              key={uuidv4()}
              image={image}
              name={name}
              description={description}
              isSecond={index % 2 ? true : false}
            />
          ))}
        </Styled.TilesWrapper>
      </Styled.Container>
    </Styled.SpeakersWrapper>
  );
};

export default Speakers;
