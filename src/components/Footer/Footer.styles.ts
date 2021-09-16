import styled from "styled-components";

import media from "utils/styled/media.styles";

export const FooterWrapper = styled.div`
  width: 100%;
  height: 175px;
  position: absolute;
  bottom: 0;
  left: 0;
  background: url(svgs/waveMobile.svg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  ${media.desktop} {
    background: url(svgs/wave.svg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
`;
