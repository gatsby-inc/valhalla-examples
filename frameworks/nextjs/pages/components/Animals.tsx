import React, { useState } from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import styled, { css } from "styled-components";
import Link from "next/link";
import Image from "next/image";

const PageTitle = styled.h1`
  color: var(--color-fg);
  margin: 0 0 var(--size-4);
  font-size: var(--font-size-6);
`;

const Description = styled.div`
  color: var(--color-fg);
  font-size: var(--font-size-3);
  line-height: var(--lineheight-4);
`;

export const AnimalList = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: var(--size-5) 0;
  padding-bottom: var(--size-5);
  gap: var(--size-6);
  justify-content: space-between;
`;

const ImageWrapper = styled.div`
  background: var(--color-bg-calm);
  border-radius: var(--radius-5);
  overflow: hidden;
  flex-shrink: 0;
`;

const AnimalName = styled.span`
  font-size: var(--font-size-2);
  font-weight: var(--font-weight-7);
  line-height: var(--lineheight-1);
  color: var(--color-fg);
  margin: 0;
  display: inline-block;
`;

const ViewDetails = styled.a`
  display: inline-flex;
  align-items: baseline;
  text-decoration: none;
  text-underline-offset: 2px;

  :before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
  }
`;

const ViewDetailsIcon = styled.span`
  text-decoration: none;
  display: inline-block;
  width: var(--size-3);
  height: var(--size-3);
  color: var(--color-fg-calm);
  transition-property: all;
  transition-duration: 0.125s;
  transition-timing-function: ease-in-out;

  > svg {
    vertical-align: middle;
  }
`;

const Card = styled.div`
  align-self: flex-start;
  box-sizing: content-box;
  color: var(--color-fg-calm);
  line-height: var(--line-height-3);
  position: relative;
  display: flex;
  flex-direction: ${(props) => (props.disableDetails ? "row" : "column")};
  font-size: var(--font-size-1);
  gap: ${(props) =>
    props.disableDetails
      ? "var(--size-6)"
      : "calc(var(--size-2) + var(--size-2))"};
  margin-top: ${(props) =>
    props.disableDetails ? "var(--size-7)" : "var(--size-0)"};
  width: ${(props) => (props.disableDetails ? "auto" : "min-content")};

  ${ImageWrapper} {
    box-shadow: var(--shadow-elevation-medium);
    transition-property: all;
    transition-duration: 0.125s;
    transition-timing-function: ease-in-out;
    // because Next's <Image> is rendered as inline-block
    // and https://github.com/vercel/next.js/issues/18915 is a rabbit hole
    // i don't have time for
    height: ${(props) => (props.disableDetails ? `400px` : `200px`)};
  }

  ${(props) =>
    !props.disableDetails
      ? css`
          &:hover ${ImageWrapper} {
            box-shadow: var(--shadow-elevation-high);
            transform: scale(1.025);
          }

          &:hover ${ViewDetails} {
            color: var(--color-accent);
          }

          &:hover ${AnimalName} {
            color: var(--color-accent);
          }

          &:hover ${ViewDetailsIcon} {
            color: var(--color-accent);
            left: 5px;
            transition-property: all;
            transition-duration: 0.125s;
            transition-timing-function: ease-in-out;
          }
        `
      : css`
          ${ImageWrapper} {
            box-shadow: var(--shadow-elevation-high);
          }
        `}

  @media only screen and (max-width: 500px) {
    width: 100%;
    flex: auto;
    height: auto;
  }
`;

const AnimalImage = styled.img`
  width: 200px;
  margin: 0 auto;
  object-fit: cover;
  height: 200px;
  display: block;

  @media only screen and (max-width: 500px) {
    width: 100%;
    height: 200px;
  }
`;

const AnimalType = styled.span`
  font-size: var(--font-size-0);
  line-height: var(--lineheight-0);
  color: var(--color-fg-calm);
  padding-top: 6px;
  text-transform: capitalize;
  float: right;
`;

const DetailLink = ({ children, href }) => (
  <Link passHref href={href}>
    <ViewDetails>
      <AnimalName>
        {children}
        <ViewDetailsIcon>
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 18L15 12L9 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </ViewDetailsIcon>
      </AnimalName>
    </ViewDetails>
  </Link>
);

export function AnimalDisplay({ animal, type, disableDetails = false }) {
  const [animalState, setAnimalState] = useState(animal);
  const [name, setName] = useState(animal?.name);

  return (
    <Card disableDetails={disableDetails}>
      <ImageWrapper>
        {animalState?.image?.gatsbyImageData ? (
          <GatsbyImage
            image={animalState?.image?.gatsbyImageData}
            alt={animalState?.name}
            style={{
              borderRadius: "var(--radius-5)",
              height: disableDetails ? 400 : 200,
              width: disableDetails ? 400 : 200,
            }}
          />
        ) : (
          <Image
            src={animalState?.image?.url}
            alt={animalState?.name}
            height={disableDetails ? 400 : 200}
            width={disableDetails ? 400 : 200}
            layout="fixed"
          />
        )}
      </ImageWrapper>
      <div>
        {disableDetails ? (
          <PageTitle>{animalState?.name || `Good Boy`}</PageTitle>
        ) : (
          <DetailLink href={`/${type}/${animalState?.id}/`}>
            {animalState?.name || `Good Boy`}
          </DetailLink>
        )}
        {type && <AnimalType>{type}</AnimalType>}
        {disableDetails && animalState?.about?.about && (
          <Description>{animalState?.about?.about}</Description>
        )}
      </div>
    </Card>
  );
}

export function Animal({ animal }) {
  return (
    <AnimalDisplay key={animal?.id} animal={animal} type={animal.animalType} />
  );
}

export function Animals({ data }) {
  return (
    <AnimalList>
      {data?.map((animal, i) => {
        return <Animal key={`${animal.name}${i}`} animal={animal} />;
      })}
    </AnimalList>
  );
}
