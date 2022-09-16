import React from "react";
import styled from "styled-components";

import "../assets/fonts/futura-pt/Webfonts/futurapt_book_macroman/stylesheet.css";
import "../assets/fonts/futura-pt/Webfonts/futurapt_demi_macroman/stylesheet.css";
import "../assets/fonts/futura-pt/Webfonts/futurapt_bold/stylesheet.css";

import logo from "../assets/puggo.jpeg";
import catto from "../assets/catto.png";
import { Link } from "gatsby";

const PageWrapper = styled.div`
  color: #232129;
  max-width: 1024px;
  margin: 24px auto;
  font-family: Futura PT, Roboto, "sans-serif";
  @media only screen and (max-width: 500px) {
    max-width: 100vw;
  }
`;

const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  margin: 0 30px 32px 30px;
`;

const FlexItem = styled.div`
  display: flex;
`;

const PupLogo = styled.img`
  height: 48px;
  width: 48px;
`;

const NavTitle = styled.h1`
  //styleName: Heading / Small (24\30);
  font-family: Futura PT, Roboto, "sans-serif";
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px;
  letter-spacing: 0px;
  text-align: center;
  margin: 0 12px;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  top: 50%;
  position: absolute;
  margin-left: 60px;
  @media only screen and (max-width: 500px) {
    position: relative;
    transform: none;
    margin-left: 0;
    text-align: left;
  }
`;

const Subtitle = styled.h2`
  //styleName: Heading / Medium (28\35);
  font-family: Futura PT, Roboto, "sans-serif";
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 35px;
  letter-spacing: -0.25px;
`;

const NavItem = styled(Link)`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0px;
  text-align: center;
  text-decoration: none;
  color: black;
  @media only screen and (max-width: 500px) {
    position: relative;
    transform: none;
    margin-left: 0;
    text-align: left;
    padding: 8px 0;
  }
  &:active {
    color: inherit;
  }
  &:hover {
    color: #d65108;
    transition: all 0.3s ease-in-out;
  }
`;

const PoweredBy = styled.p`
  display: inline;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  top: 10%;
  position: absolute;
  right: 0;
  //styleName: Heading / X Small (20\25);
  font-family: Futura PT, Roboto, sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 25px;
  letter-spacing: 0px;
  @media only screen and (max-width: 500px) {
    position: relative;
    transform: none;
    margin-left: 0;
  }
`;

const GatsbyIcon = (
  <svg
    width="32"
    height="32"
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M21.9286 12.0001H15.9286V13.7144H20.0429C19.4429 16.2858 17.5572 18.4287 15.0715 19.2858L5.21433 9.42868C6.2429 6.42868 9.15718 4.28582 12.5 4.28582C15.0715 4.28582 17.3858 5.57153 18.8429 7.54296L20.1286 6.42868C18.4143 4.11439 15.6715 2.57153 12.5 2.57153C8.0429 2.57153 4.27147 5.74296 3.32861 9.94296L14.6429 21.2572C18.7572 20.2287 21.9286 16.4572 21.9286 12.0001Z"
      fill="white"
    />
    <path
      d="M3.07141 12.0857C3.07141 14.4857 4.01427 16.8 5.81427 18.6C7.61427 20.4 10.0143 21.3428 12.3286 21.3428L3.07141 12.0857Z"
      fill="white"
    />
    <path
      d="M12.5 0C5.9 0 0.5 5.4 0.5 12C0.5 18.6 5.9 24 12.5 24C19.1 24 24.5 18.6 24.5 12C24.5 5.4 19.1 0 12.5 0ZM5.81429 18.6857C4.01429 16.8857 3.07143 14.4857 3.07143 12.1714L12.4143 21.4286C10.0143 21.3429 7.61429 20.4857 5.81429 18.6857ZM14.5571 21.1714L3.32857 9.94286C4.27143 5.74286 8.04286 2.57143 12.5 2.57143C15.6714 2.57143 18.4143 4.11429 20.1286 6.42857L18.8429 7.54286C17.3857 5.57143 15.0714 4.28571 12.5 4.28571C9.15714 4.28571 6.32857 6.42857 5.21429 9.42857L15.0714 19.2857C17.5571 18.4286 19.4429 16.2857 20.0429 13.7143H15.9286V12H21.9286C21.9286 16.4571 18.7571 20.2286 14.5571 21.1714Z"
      fill="#7026B9"
    />
  </svg>
);

export function Layout({ children, isDogs, title, active }) {
  return (
    <PageWrapper>
      <Navbar>
        <FlexItem style={{ alignSelf: `center` }}>
          <div style={{ alignSelf: `center`, marginRight: `10px` }}>
            {isDogs ? (
              <PupLogo src={logo} alt="Pup Snuggles" />
            ) : (
              <PupLogo src={catto} alt="Cat Snuggles" />
            )}
          </div>
          <NavTitle>{isDogs ? `Pup` : `Cat`} Snuggles</NavTitle>
        </FlexItem>
        <FlexItem style={{ alignSelf: `center` }}>
          <NavItem
            to="/"
            style={{
              marginRight: `16px`,
              color: active === "home" ? `#d65108` : `black`,
            }}
          >
            Home
          </NavItem>
        </FlexItem>
        <FlexItem style={{ alignSelf: `center` }}>
          <div style={{ alignSelf: `center`, marginRight: `10px` }}>
            {GatsbyIcon}
          </div>
          <PoweredBy>
            Powered by{" "}
            <a
              href="https://www.gatsbyjs.com/"
              target="_blank"
              rel="noreferrer"
              style={{
                fontWeight: `bold`,
                color: `#7026B9`,
                textDecoration: `none`,
              }}
            >
              Gatsby
            </a>
          </PoweredBy>
        </FlexItem>
      </Navbar>
      <Subtitle style={{ marginLeft: `30px` }}>{title}</Subtitle>
      <div>{children}</div>
    </PageWrapper>
  );
}
