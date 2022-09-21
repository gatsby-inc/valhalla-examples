import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import "@fontsource/inter";

import logo from "../assets/logo.svg";

const PageWrapper = styled.div`
  color: #232129;
  max-width: 1024px;
  margin: 32px auto 64px;
  padding: 0 32px;
  font-family: Inter, Roboto, "sans-serif";
`;

const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 32px;
  @media only screen and (max-width: 500px) {
    margin-bottom: 32px;
  }
`;

const FlexItem = styled.div`
  display: flex;
`;

const PupLogo = styled.img`
  height: 48px;
  width: 48px;
`;

const NavTitle = styled.h1`
  color: #633;
  font-size: 18px;
  line-height: 1;
  margin: 0;
`;

const PoweredBy = styled.p`
  font-size: 14px;
  margin: 0;
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

const PoweredByLink = styled.a`
  font-weight: 600;
  color: #7026b9;
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
    <PageWrapper>
      <Navbar>
        <Link to="/" style={{ textDecoration: "none" }}>
          <FlexItem style={{ flexDirection: `row`, gap: 12 }}>
            <PupLogo src={logo} alt="Pet Snuggles" />
            <NavTitle style={{ alignSelf: "flex-end" }}>
              Pet
              <br />
              Snuggles
            </NavTitle>
          </FlexItem>
        </Link>
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
  );
}
