import React from "react";
import Link from "next/link";
import styled from "styled-components";
import "@fontsource/inter";

import LogoComp from "../assets/logo.svg";
import GlobalStyles from "./GlobalStyles";

const PageWrapper = styled.div`
  max-width: 1024px;
  margin: var(--size-5) auto var(--size-6);
  padding: 0 var(--size-5);
`;

const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: var(--size-5);
`;

const HomeLink = styled.a`
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

const NavLink = styled.a`
  font-weight: var(--font-weight-7);
  text-decoration: none;
  font-size: var(--font-size-3);
  color: var(--color-text-calm);
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
  color: var(--color-text);
  font-size: var(--font-size-3);
  line-height: var(--lineheight-00);
  margin: 0;
`;

const PoweredBy = styled.p`
  font-size: var(--font-size-1);
  margin: 0;
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  gap: var(--size-2);
`;

const PoweredByLink = styled.a`
  font-weight: var(--font-weight-6);
  color: var(--color-gatsby);
  text-decoration: none;
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  align-self: center;
  gap: 6px;
`;

const GatsbyIcon = (
  <svg
    width="20"
    height="20"
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle fill="#7026B9" cx="14" cy="14" r="14" />
    <g fill="#fff">
      <path d="M6.2,21.8C4.1,19.7,3,16.9,3,14.2L13.9,25C11.1,24.9,8.3,23.9,6.2,21.8z" />
      <path
        d="M16.4,24.7L3.3,11.6C4.4,6.7,8.8,3,14,3c3.7,0,6.9,1.8,8.9,4.5l-1.5,1.3C19.7,6.5,17,5,14,5
			c-3.9,0-7.2,2.5-8.5,6L17,22.5c2.9-1,5.1-3.5,5.8-6.5H18v-2h7C25,19.2,21.3,23.6,16.4,24.7z"
      />
    </g>
  </svg>
);

export function Layout({ children, isDogs, active }) {
  return (
    <>
      <GlobalStyles />
      <PageWrapper>
        <Navbar>
          <Link href="/">
            <HomeLink>
              <LogoComp />
              <NavTitle>
                Pet
                <br />
                Snuggles
              </NavTitle>
            </HomeLink>
          </Link>
          <NavLinks>
            <Link href="/">
              <NavLink>Pets</NavLink>
            </Link>
            <NavLink href="/blog/">Blog</NavLink>
            <NavLink href="/store/">Swag</NavLink>
          </NavLinks>
          <PoweredBy>
            Powered by{" "}
            <PoweredByLink
              href="https://www.gatsbyjs.com/"
              target="_blank"
              rel="noreferrer"
            >
              {GatsbyIcon}
              Gatsby
            </PoweredByLink>
          </PoweredBy>
        </Navbar>
        <div>{children}</div>
      </PageWrapper>
    </>
  );
}
