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
  align-items: flex-end;
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
  font-size: var(--font-size-2);
  font-weight: var(--font-weight-5);
  margin: 0 0 calc(-1 * var(--size-1));
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  gap: var(--size-2);
`;

const PoweredByLink = styled.a`
  font-weight: var(--font-weight-6);
  color: var(--color-text);
  text-decoration: underline;
  text-decoration-thickness: 1.5px;
  text-underline-offset: 2px;
`;

const FrameworkLogo = (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9.34506 0.00538207C9.30205 0.00929157 9.1652 0.0229748 9.04203 0.0327485C6.20137 0.28882 3.54057 1.82134 1.85533 4.17681C0.916911 5.48649 0.316716 6.9721 0.0899316 8.54567C0.00977517 9.09496 0 9.2572 0 10.002C0 10.7467 0.00977517 10.909 0.0899316 11.4582C0.633431 15.2133 3.30596 18.3683 6.9306 19.5372C7.57967 19.7464 8.26393 19.8891 9.04203 19.9751C9.34506 20.0083 10.6549 20.0083 10.958 19.9751C12.3011 19.8265 13.4389 19.4942 14.5611 18.9215C14.7331 18.8335 14.7664 18.81 14.7429 18.7905C14.7273 18.7788 13.9941 17.7955 13.1144 16.607L11.5152 14.4471L9.51124 11.4817C8.4086 9.85144 7.50147 8.5183 7.49365 8.5183C7.48583 8.51635 7.47801 9.83385 7.4741 11.4426C7.46823 14.2594 7.46628 14.3728 7.43109 14.4392C7.38025 14.535 7.34115 14.5741 7.25904 14.6171C7.19648 14.6484 7.14174 14.6543 6.84653 14.6543H6.50831L6.41838 14.5976C6.35973 14.5604 6.31672 14.5116 6.28739 14.4549L6.24633 14.3669L6.25024 10.4476L6.25611 6.52642L6.31672 6.45018C6.348 6.40913 6.41447 6.35635 6.46139 6.33094C6.54154 6.29185 6.57282 6.28794 6.91105 6.28794C7.30987 6.28794 7.37634 6.30358 7.47996 6.41695C7.50929 6.44823 8.59433 8.0824 9.89247 10.0508C11.1906 12.0193 12.9658 14.707 13.8377 16.0265L15.4213 18.425L15.5015 18.3722C16.2111 17.9109 16.9619 17.2541 17.5562 16.5699C18.8211 15.1175 19.6364 13.3465 19.9101 11.4582C19.9902 10.909 20 10.7467 20 10.002C20 9.2572 19.9902 9.09496 19.9101 8.54567C19.3666 4.7906 16.694 1.63564 13.0694 0.466702C12.4301 0.259499 11.7498 0.116803 10.9873 0.0307938C10.7996 0.0112463 9.50733 -0.0102559 9.34506 0.00538207ZM13.4389 6.05337C13.5327 6.10028 13.609 6.1902 13.6364 6.28403C13.652 6.33485 13.6559 7.42169 13.652 9.87099L13.6461 13.3856L13.0264 12.4356L12.4047 11.4856V8.93076C12.4047 7.279 12.4125 6.35049 12.4242 6.30553C12.4555 6.19607 12.5239 6.11006 12.6178 6.05923C12.6979 6.01818 12.7273 6.01427 13.0342 6.01427C13.3236 6.01427 13.3744 6.01818 13.4389 6.05337Z"
      fill="#663333"
    />
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
            <span>
              Powered by{" "}
              <PoweredByLink
                href="https://www.gatsbyjs.com/"
                target="_blank"
                rel="noreferrer"
              >
                Valhalla
              </PoweredByLink>{" "}
              and <b style={{ fontWeight: "var(--font-weight-6)" }}>Next.js</b>
            </span>
            {FrameworkLogo}
          </PoweredBy>
        </Navbar>
        <div>{children}</div>
      </PageWrapper>
    </>
  );
}
