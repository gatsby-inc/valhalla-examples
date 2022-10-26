import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import "@fontsource/inter";

import logo from "../assets/logo.svg";
import framework from "../assets/framework.svg";
import GlobalStyles from "./GlobalStyles";

const PageWrapper = styled.div`
  max-width: 1024px;
  margin: var(--size-5) auto var(--size-6);
  padding: 0 var(--size-5);
`;

const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: var(--size-5);
`;

const HomeLink = styled(Link)`
  text-decoration: none;
  display: flex;
  flex-direction: row;
  gap: 12px;
  align-items: flex-end;
  transition-property: transform;
  transition-duration: 0.15s;
  transition-timing-function: ease-in-out;

  :hover {
    transform: scale(1.1);
  }
`;

const NavLinks = styled.nav`
  align-self: flex-end;
  display: flex;
  flex-direction: row;
  gap: var(--size-5);
  margin-left: var(--size-5);
  margin-right: auto;
`;

const NavLink = styled(Link)`
  font-weight: var(--font-weight-7);
  text-decoration: none;
  font-size: var(--font-size-3);
  color: var(--color-fg-calm);
  line-height: var(--lineheight-00);

  :hover {
    color: var(--color-active);
  }
`;

const Logo = styled.img`
  height: var(--size-6);
  width: var(--size-6);
`;

const NavTitle = styled.h1`
  color: var(--color-fg);
  font-size: var(--font-size-3);
  line-height: var(--lineheight-00);
  margin: 0;
`;

const PoweredBy = styled.p`
  font-size: var(--font-size-2);
  font-weight: var(--font-weight-5);
  margin: 0 0 calc(-1 * var(--size-1));
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  gap: var(--size-2);
`;

const PoweredByLink = styled.a`
  color: inherit;
  font-weight: var(--font-weight-6);
  text-decoration: underline;
  text-decoration-thickness: 1.5px;
  text-underline-offset: 2px;
`;

export function Layout({ children, isDogs, active }) {
  return (
    <>
      <GlobalStyles />
      <PageWrapper>
        <Navbar>
          <HomeLink to="/">
            <Logo src={logo} alt="Pet Snuggles" />
            <NavTitle>
              Pet
              <br />
              Snuggles
            </NavTitle>
          </HomeLink>
          <NavLinks>
            <NavLink to="/">Pets</NavLink>
            <NavLink to="/blog/">Blog</NavLink>
            <NavLink to="/store/">Swag</NavLink>
          </NavLinks>
          <PoweredBy>
            <span>
              Powered by{" "}
              <PoweredByLink
                href="https://www.gatsbyjs.com/"
                target="_blank"
                rel="noreferrer"
              >
                Valhalla
              </PoweredByLink>{" "}
              and <b style={{ fontWeight: "var(--font-weight-6)" }}>Gatsby</b>
            </span>{" "}
            <img src={framework} />
          </PoweredBy>
        </Navbar>
        <div>{children}</div>
      </PageWrapper>
    </>
  );
}
