import React from "react";
import styled from "styled-components";

import contentful from "../assets/contentful.svg";
import wordpress from "../assets/wordpress.svg";
import shopify from "../assets/shopify.svg";
import ssr from "../assets/ssr.svg";
import ssg from "../assets/ssg.svg";

export const cmsIcons = {
  Contentful: contentful,
  WordPress: wordpress,
  Shopify: shopify,
};

export const rendererIcons = {
  ssg: ssg,
  ssr: ssr,
};

const Logo = styled.img`
  height: var(--size-4);
  width: var(--size-4);
`;

const Logos = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--size-2);
`;

const Container = styled.p`
  align-items: center;
  background: var(--color-background-muted);
  border-radius: var(--radius-4);
  color: var(--color-text-calm);
  display: flex;
  font-size: var(--font-size-2);
  flex-direction: row;
  font-weight: var(--font-weight-5);
  gap: var(--size-3);
  padding: var(--size-3) var(--size-3);
`;

export function Info({ cms, renderer }) {
  return (
    <Container>
      <Logos>
        <Logo src={cmsIcons[cms]} />
        {renderer && (
          <>
            + <Logo src={rendererIcons[renderer]} />
          </>
        )}
      </Logos>{" "}
      Rendered {renderer === "ssg" ? "server-side" : "at build time"} using data
      from {cms}.
    </Container>
  );
}