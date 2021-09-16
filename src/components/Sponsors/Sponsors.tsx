import React, { FC } from "react";
import { v4 as uuidv4 } from "uuid";
import { DATA } from "./DATA";

import * as Styled from "./Sponsors.styles";

export interface SponsorsProps {}

const Sponsors: FC<SponsorsProps> = () => {
  return (
    <Styled.SponsorsWrapper>
      <Styled.Content>
        <Styled.Title>Sponsors of TheFutureTalks Conference</Styled.Title>
        <Styled.SponsorsContainer>
          {DATA.map((icon) => (
            <Styled.Image key={uuidv4()} src={icon.src} alt={icon.alt} />
          ))}
        </Styled.SponsorsContainer>
      </Styled.Content>
    </Styled.SponsorsWrapper>
  );
};

export default Sponsors;
