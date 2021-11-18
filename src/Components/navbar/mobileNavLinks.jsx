import styled from "@emotion/styled";
import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { NavBarToggle } from "./navbarToggle";

const NavLinksContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

const LinskWrapper = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  height: 100%;
  list-style: none;
  background-color: #fff;
  width: 70%;
  position: fixed;
  top: 80px;
  left: 0;
  z-index: 1;
`;

const LinkItem = styled.li`
  width: 100%;
  padding: 0 1.1em;
  color: #222;
  font-weight: 600;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .link {
    font-family: "Varela Round", sans-serif;
    text-decoration: none;
    color: inherit;
    font-size: inherit;
    border-top: 2px solid transparent;
    transition: all 220ms ease-in-out;

    &:hover {
      border-top: 2px solid #22a6b3;
    }
  }
`;

export function MobileNavLinks(props) {
  const [isOpen, setOpen] = useState(false);

  return (
    <NavLinksContainer>
      <NavBarToggle isOpen={isOpen} toggle={() => setOpen(!isOpen)} />
      {isOpen && (
        <LinskWrapper>
          <LinkItem>
            <h3 style={{ padding: "30px" }}>052-5702264 :להזמנות</h3>
            <Link
              className="link"
              smooth
              to="#menu"
              onClick={() => setOpen(!isOpen)}
            >
              תפריט
            </Link>
            <Link
              className="link"
              smooth
              to="#photos"
              onClick={() => setOpen(!isOpen)}
            >
              תמונות
            </Link>
            <Link
              className="link"
              smooth
              to="#critics"
              onClick={() => setOpen(!isOpen)}
            >
              מה חושבים עלינו
            </Link>
            <Link
              className="link"
              smooth
              to="#contact"
              onClick={() => setOpen(!isOpen)}
            >
              צור קשר
            </Link>
          </LinkItem>
        </LinskWrapper>
      )}
    </NavLinksContainer>
  );
}
