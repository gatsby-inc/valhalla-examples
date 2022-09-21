import React from "react";
import { graphql, Link } from "gatsby";
import styled, { css } from "styled-components";

import { Layout } from "../components/Layout";
import { Animals } from "../components/Animals";

const FilterAndSearch = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 1;
  background-image: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 1),
    rgba(255, 255, 255, 0.95)
  );
`;

const Filters = styled.div`
  display: flex;
  margin: 32px 0;
  gap: 16px;
  align-items: center;
`;

const FilterButton = styled.button`
  background: transparent;
  border-radius: 4px;
  border: none;
  font-size: 18px;
  cursor: pointer;
  font-weight: 700;
  color: #66333380;
  font-family: Inter, sans-serif;

  :hover {
    color: #ff6566;
  }

  ${(props) =>
    props.active &&
    css`
      color: #633;
    `}
`;

const SearchContainer = styled.div`
  background: #6633330f;
  border-radius: 6px;
  position: relative;
  color: #66333380;
`;

const Search = styled.input`
  border-radius: 6px;
  font-family: Inter, sans-serif;
  font-size: 16px;
  color: #633;
  border: none;
  background: none;
  padding: 9px 16px 9px 36px;

  :placeholder {
    color: #66333380;
  }
`;

const Pagination = styled.nav`
  margin: 32px 0;
`;

const PaginationList = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 16px;
  list-style: none;
  padding: 0;
`;

const PaginationItem = styled.li``;

const PaginationLink = styled(Link)`
  border-radius: 4px;
  text-decoration: none;
  font-weight: 500;
  position: relative;
  display: block;
  padding: 6px 12px;
  font-size: 14px;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  :hover {
    background: yellow;
    color: red;
  }

  ${(props) =>
    props.active &&
    css`
      background: #ff6566;
      color: #fff;
    `}
`;

const SearchIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ position: "absolute", top: 8, left: 8 }}
  >
    <g
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M11 19.1758C15.4183 19.1758 19 15.5941 19 11.1758C19 6.7575 15.4183 3.17578 11 3.17578C6.58172 3.17578 3 6.7575 3 11.1758C3 15.5941 6.58172 19.1758 11 19.1758Z" />
      <path d="M21.0004 21.1742L16.6504 16.8242" />
    </g>
  </svg>
);

export default function Catalog({ data }) {
  const [animals, setAnimals] = React.useState(
    data?.allContentfulAnimal?.nodes || []
  );
  const [animalState, setAnimalState] = React.useState("");

  return (
    <Layout title="Our Snugglers" isDogs active="home">
      <FilterAndSearch>
        <Filters>
          <FilterButton
            onClick={() => {
              setAnimalState("");
              setAnimals(data?.allContentfulAnimal?.nodes);
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
        </Filters>

        <SearchContainer>
          <SearchIcon />
          <Search type="search" placeholder="Search pets" />
        </SearchContainer>
      </FilterAndSearch>

      <Animals type={animalState || `dogs`} data={animals || []} />

      <Pagination>
        <PaginationList>
          <PaginationItem>
            <PaginationLink to="/">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink to="/">2</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink to="/">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink to="/">4</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink to="/">5</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink to="/" active>
              6
            </PaginationLink>
          </PaginationItem>
        </PaginationList>
      </Pagination>
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
