import styled from "@emotion/styled";
import React from "react";

import MakomLogo from "../../logo.png";

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const LogoImg = styled.div`
  width: 89px;
  height: 89px;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const LogoText = styled.div`
  font-size: 16px;
  font-family: "Varela Round", sans-serif;
  margin: 0;
  margin-right: 4px;
  color: #222;
  font-weight: 600;
`;

export function Logo(props) {
  return (
    <LogoWrapper>
      <LogoText>מקום טוב לשבט</LogoText>
      <LogoImg>
        <img src={MakomLogo} alt="מקום טוב לשבט" />
      </LogoImg>
    </LogoWrapper>
  );
}
