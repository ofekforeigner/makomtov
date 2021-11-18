import styled from "@emotion/styled";
import React from "react";
import { HashLink as Link } from "react-router-hash-link";

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
`;

const LinkItem = styled.li`
  height: 100%;
  padding: 0 1.1em;
  color: #222;
  font-weight: 600;
  font-size: 14px;
  ${
    "" /* align-self: center;
  justify-content: center; */
  }
  display: flex;

  .link {
    padding: 0 1.8em;
    font-family: "Varela Round", sans-serif;
    text-decoration: none;
    color: inherit;
    font-size: inherit;
    align-self: center;
    justify-content: center;
    border-top: 2px solid transparent;
    transition: all 220ms ease-in-out;

    &:hover {
      border-top: 2px solid #22a6b3;
    }
  }
`;

export function NavLinks(props) {
  return (
    <NavLinksContainer>
      <LinskWrapper>
        <LinkItem>
          <Link className="link" smooth to="#contact">
            צור קשר
          </Link>
          <Link className="link" smooth to="#critics">
            מה חושבים עלינו
          </Link>
          <Link className="link" smooth to="#photos">
            תמונות
          </Link>
          <Link className="link" smooth to="#menu">
            תפריט
          </Link>
        </LinkItem>
      </LinskWrapper>
    </NavLinksContainer>
  );
}
