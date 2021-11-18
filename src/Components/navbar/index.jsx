import React from "react";
import styled from "@emotion/styled";
import { Logo } from "../logo/index";
import { NavLinks } from "./navLinks";
import { useMediaQuery } from "react-responsive";
import { DeviceSize } from "../responsive";
import { MobileNavLinks } from "./mobileNavLinks";

const NavBarContainer = styled.div`
  width: 100%;
  height: 60px;
  box-shadow: 0 1px 3px rgba(15, 15, 15, 0.13);
  display: flex;
  align-items: center;
  padding: 0 1.5em;
`;

const LeftSection = styled.div`
  display: flex;
  font-size: 16px;
  font-family: "Varela Round", sans-serif;
  margin: 0;
  color: #222;
  font-weight: 600;
`;

const MiddleSection = styled.div`
  display: flex;
  flex: 2;
  height: 100%;
  justify-content: center;
`;

const RightSection = styled.div`
  display: flex;
`;

export function Navbar(props) {
  const isMobile = useMediaQuery({ maxWidth: DeviceSize.mobile });

  return (
    <NavBarContainer>
      {!isMobile && <LeftSection>להזמנות: 052-5702264</LeftSection>}
      <RightSection>{isMobile && <MobileNavLinks />}</RightSection>
      <MiddleSection>{!isMobile && <NavLinks />}</MiddleSection>
      <Logo />
    </NavBarContainer>
  );
}
