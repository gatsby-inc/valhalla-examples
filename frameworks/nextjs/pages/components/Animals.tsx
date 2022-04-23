import React, { useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import { gql, useSubscription } from "@apollo/client";

const AnimalList = styled.section`
  display: flex;
  flex-direction: row;
  // align-items: flex-start;
  padding: 12px;
  flex-wrap: wrap;
  // justify-content: space-evenly;
  margin: 8px;
`;

const Card = styled.div`
  background: #ffffff;
  border: 1px solid #f0f0f2;
  border-radius: 8px;
  width: 219px;
  flex: 0 0 200px;
  align-self: center;
  overflow: hidden;
  padding: 12px;
  box-sizing: content-box;
  margin: 8px;
  @media only screen and (max-width: 500px) {
    width: 100%;
    flex: auto;
    height: auto;
  }
`;

const AnimalImage = styled.img`
  width: 195px;
  margin: 0 auto;
  object-fit: cover;
  height: 160px;
  display: inherit;
  border-radius: 4px;
  @media only screen and (max-width: 500px) {
    width: 100%;
    height: 200px;
  }
`;

const AnimalName = styled.p`
  font-family: Futura PT;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px;
  letter-spacing: 0px;
  text-align: left;
  margin: 12px 0 0 0;
`;

const SnugButton = styled.button`
  background-color: white;
  color: #d65108;
  border: none;
  border-radius: 100px;
  font-weight: 600;
  padding: 8px 32px;
  cursor: pointer;
  font-size: 14px;
  line-height: 21px;
  border: 1px solid #d65108;
  width: 100%;
  margin-top: 10px;
  &:hover {
    background-color: #d65108;
    color: white;
    transition: all 0.3s ease-in-out;
  }
`;

const ViewDetails = styled.a`
  color: #d65108;
  &:active {
    color: #d65108;
  }
`;

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

  useSubscription(DOG_SUB, {
    variables: {
      id: animal?.id,
    },
    onSubscriptionData: ({ subscriptionData: { data } }) => {
      // do something with `data` here
      console.log(data);
      setAnimalState(data?.contentfulDogsChanged);
    },
  });

  return (
    <>
      {animalState?.image?.url && (
        <AnimalImage src={animalState?.image?.url} alt={animalState?.name} />
      )}
      <AnimalName>{animalState?.name || `Good Boy`}</AnimalName>
      {/* <p className={styles.dogCardLocation}>{dog?.city}</p> */}
      {animalState?.about?.about && (
        <p style={{ height: `57px` }}>{animalState?.about?.about}</p>
      )}
      {!disableDetails && (
        <div style={{ marginBottom: `16px` }}>
          <Link href={`/${type}/${animalState?.id}/`}>
            <ViewDetails to={`/${type}/${animalState?.id}/`}>
              View Details
            </ViewDetails>
          </Link>
        </div>
      )}
    </>
  );
}

export function Animal({ animal, type }) {
  return (
    <Card key={animal?.id}>
      <AnimalDisplay animal={animal} type={type} />
    </Card>
  );
}

export function Animals({ data, type }) {
  return (
    <AnimalList>
      {data?.map((animal, i) => {
        return (
          <Animal key={`${animal.name}${i}`} animal={animal} type={type} />
        );
      })}
    </AnimalList>
  );
}
