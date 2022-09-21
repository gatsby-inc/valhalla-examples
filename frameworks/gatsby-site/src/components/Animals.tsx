import React, { useState } from "react";
// import { GatsbyImage, getImage } from "gatsby-plugin-image";
import styled from "styled-components";
import { Link } from "gatsby";
import { gql, useMutation, useSubscription } from "@apollo/client";
// import { createAndRedirectStripeSession } from "./utils";

const AnimalList = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 32px 0;
  gap: 64px;
  // justify-content: space-between;
`;

const Card = styled.div`
  width: 200px;
  flex: 0 0 200px;
  align-self: flex-start;
  overflow: hidden;
  box-sizing: content-box;
  font-size: 14px;
  color: #66333370;
  line-height: 1.5;
  position: relative;
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
  display: inherit;
  border-radius: 16px;
  @media only screen and (max-width: 500px) {
    width: 100%;
    height: 200px;
  }
`;

const AnimalName = styled.p`
  font-size: 16px;
  font-weight: 700;
  line-height: 1.25;
  color: #663;
  margin: 12px 0 0;
  display: inline-block;
`;

const AnimalType = styled.span`
  font-size: 12px;
  line-height: 1;
  color: #666633a0;
  background: #66333310;
  padding: 6px 8px;
  border-radius: 1000px;
  text-transform: capitalize;
  float: right;
  margin: 12px 0 0;
`;

const ViewDetails = styled(Link)`
  font-weight: 600;
  color: #66333380;
  line-height: 1;
  text-underline-offset: 2px;
  margin: 24px 0 0;
  display: flex;
  align-items: baseline;
  text-decoration: none;

  :hover {
    color: #ff6566;
    text-decoration: underline;
  }

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
  width: 16px;
  height: 16px;

  > svg {
    vertical-align: middle;
  }
`;

const ChevronRight = () => (
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
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

const DOG_SUB = gql`
  subscription ($id: ID!) {
    contentfulDogsChanged(id: $id) {
      id
      name
      about {
        about
      }
      image {
        url
      }
    }
  }
`;

export function AnimalDisplay({ animal, type, disableDetails = false }) {
  const [animalState, setAnimalState] = useState(animal);
  const [name, setName] = useState(animal?.name);

  return (
    <>
      {animalState?.image?.url && (
        <AnimalImage src={animalState?.image?.url} alt={animalState?.name} />
      )}
      <AnimalName>{animalState?.name || `Good Boy`}</AnimalName>
      {type && <AnimalType>{type}</AnimalType>}
      {/* <p className={styles.dogCardLocation}>{dog?.city}</p> */}
      {animalState?.about?.about && <p>{animalState?.about?.about}</p>}
      {!disableDetails && (
        <ViewDetails to={`/${type}/${animalState?.id}/`}>
          View Details{" "}
          <ViewDetailsIcon>
            <ChevronRight />
          </ViewDetailsIcon>
        </ViewDetails>
      )}
    </>
  );
}

export function Animal({ animal }) {
  return (
    <Card key={animal?.id}>
      <AnimalDisplay animal={animal} type={animal.type} />
    </Card>
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
