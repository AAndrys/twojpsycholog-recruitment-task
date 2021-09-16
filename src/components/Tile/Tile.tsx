import React, { FC } from "react";
import { v4 as uuidv4 } from "uuid";

import * as Styled from "./Tile.styles";

export interface TileProps {
  image: string;
  name: string;
  description: Array<{ text: string }>;
  isSecond: boolean;
}

const Tile: FC<TileProps> = ({ image, name, description, isSecond }) => {
  return (
    <Styled.TileWrapper isSecond={isSecond}>
      <Styled.Image image={image} />
      <Styled.Name>{name}</Styled.Name>
      {description.map(({ text }) => (
        <Styled.Description key={uuidv4()}>{text}</Styled.Description>
      ))}
    </Styled.TileWrapper>
  );
};

export default Tile;
