import React from "react";
import { graphql, Link } from "gatsby";
import styled, { css } from "styled-components";
import { Layout } from "../components/Layout";
import { Animals } from "../components/Animals";

const FilterButton = styled.button`
  background: transparent;
  border-radius: 4px;
  border: none;
  font-size: 18px;
  cursor: pointer;
  font-weight: 700;
  color: #66333380;

  :hover {
    color: #ff6566;
  }

  ${(props) =>
    props.active &&
    css`
      color: #633;
    `}
`;

export default function Catalog({ data }) {
  const [animals, setAnimals] = React.useState(
    data?.allContentfulAnimal?.nodes || []
  );
  const [animalState, setAnimalState] = React.useState("");

  return (
    <Layout title="Our Snugglers" isDogs active="home">
      <div
        style={{
          display: `flex`,
          margin: "32px 0",
          gap: 16,
          alignItems: "center",
        }}
      >
        <FilterButton
          onClick={() => {
            setAnimalState("");
            // TODO handle reseting `Animals` to all
          }}
          active={animalState === ``}
        >
          All Snugglers
        </FilterButton>
        <FilterButton
          onClick={() => {
            setAnimalState("dog");
            window
              .fetch("/api/animalFilter", {
                method: `POST`,
                headers: {
                  "Content-Type": `application/json`,
                },
                body: JSON.stringify({ type: `dog` }),
              })
              .then((res) => {
                return res.json();
              })
              .then((data: any) => {
                setAnimals(data?.animals);
              });
          }}
          active={animalState === `dog`}
        >
          Dogs
        </FilterButton>
        <FilterButton
          onClick={() => {
            setAnimalState("cat");
            window
              .fetch("/api/animalFilter", {
                method: `POST`,
                headers: {
                  "Content-Type": `application/json`,
                },
                body: JSON.stringify({ type: `cat` }),
              })
              .then((res) => {
                return res.json();
              })
              .then((data: any) => {
                setAnimals(data?.animals);
              });
          }}
          active={animalState === `cat`}
        >
          Cats
        </FilterButton>
        <FilterButton
          onClick={() => {
            setAnimalState("exotic");
            window
              .fetch("/api/animalFilter", {
                method: `POST`,
                headers: {
                  "Content-Type": `application/json`,
                },
                body: JSON.stringify({ type: `exotic` }),
              })
              .then((res) => {
                return res.json();
              })
              .then((data: any) => {
                setAnimals(data?.animals);
              });
          }}
          active={animalState === `exotic`}
        >
          Exotics
        </FilterButton>
      </div>
      <Animals type={animalState || `dogs`} data={animals || []} />
    </Layout>
  );
}

export const catalogQuery = graphql`
  query {
    allContentfulAnimal {
      nodes {
        id
        name
        type
        about {
          about
        }
        image {
          url
        }
      }
    }
  }
`;
