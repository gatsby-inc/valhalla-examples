import React, { useState } from "react";
import styled from "styled-components";
import Link from "next/link";

export const AnimalList = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: var(--size-5) 0;
  padding-bottom: var(--size-5);
  gap: var(--size-6);
  justify-content: space-between;
`;

const Card = styled.div`
  width: 200px;
  flex: 0 0 200px;
  align-self: flex-start;
  overflow: hidden;
  box-sizing: content-box;
  font-size: var(--font-size-1);
  color: var(--color-text-calm);
  line-height: var(--line-height-3);
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
  border-radius: var(--radius-5);

  @media only screen and (max-width: 500px) {
    width: 100%;
    height: 200px;
  }
`;

const AnimalName = styled.p`
  font-size: var(--font-size-2);
  font-weight: var(--font-weight-7);
  line-height: var(--lineheight-1);
  color: var(--color-text);
  margin: 12px 0 0;
  display: inline-block;
`;

const AnimalType = styled.span`
  font-size: var(--font-size-0);
  line-height: var(--lineheight-0);
  color: var(--color-text-calm);
  background: var(--color-text-light);
  padding: 6px var(--size-2);
  border-radius: var(--radius-100);
  text-transform: capitalize;
  float: right;
  margin: 12px 0 0;
`;

const ViewDetails = styled.a`
  font-weight: var(--font-weight-6);
  color: var(--color-text-calm);
  line-height: var(--lineheight-00);
  text-underline-offset: 2px;
  margin: var(--size-4) 0 0;
  display: flex;
  align-items: baseline;
  text-decoration: none;

  :hover {
    color: var(--color-active);
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
  width: var(--size-3);
  height: var(--size-3);

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
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

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
        <Link href={`/${type}/${animalState?.id}/`}>
          <ViewDetails>
            View Details{" "}
            <ViewDetailsIcon>
              <ChevronRight />
            </ViewDetailsIcon>
          </ViewDetails>
        </Link>
      )}
    </>
  );
}

export function Animal({ animal }) {
  return (
    <Card key={animal?.id}>
      <AnimalDisplay animal={animal} type={animal.animalType} />
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
