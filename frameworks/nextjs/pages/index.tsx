import React from "react";
import styled, { css } from "styled-components";
import Link from "next/link";
import Head from "next/head";

import { Layout } from "./components/Layout";
import { Animals } from "./components/Animals";

import { client } from "./lib/client"

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
    rgba(var(--color-bg-rgb), 1),
    rgba(var(--color-bg-rgb), 0.95)
  );
`;

const Filters = styled.div`
  display: flex;
  margin: var(--size-5) 0;
  gap: var(--size-3);
  align-items: center;
`;

const FilterButton = styled.button`
  background: transparent;
  border-radius: var(--radius-2);
  border: none;
  font-size: var(--font-size-3);
  cursor: pointer;
  font-weight: var(--font-weight-7);
  color: var(--color-fg-calm);

  :hover {
    color: var(--color-active);
  }

  ${(props) =>
    props.active &&
    css`
      color: var(--color-fg);
    `}
`;

const SearchContainer = styled.div`
  background: var(--color-bg-muted);
  border-radius: var(--radius-3);
  position: relative;
  color: var(--color-fg-calm);
`;

const Search = styled.input`
  border-radius: var(--radius-3);
  border: none;
  background: none;
  padding: var(--size-2) var(--size-3) var(--size-2) 36px;
  min-height: 40px;

  :placeholder {
    color: var(--color-fg-calm);
  }
`;

const SearchIconSvg = styled.svg`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: var(--size-2);
`;

const Pagination = styled.nav`
  margin: var(--size-6) 0;
  display: flex;
  flex-direction: row;
  gap: var(--size-3);
  list-style: none;
  padding: 0;
`;

const PaginationLink = styled.button`
  appearance: none;
  border: none;
  border-radius: var(--radius-2);
  cursor: pointer;
  text-decoration: none;
  font-weight: var(--font-weight-5);
  position: relative;
  display: block;
  padding: var(--size-2) var(--size-3);
  font-size: var(--font-size-2);
  transition-property: color, background-color;
  transition-duration: 0.15s;
  transition-timing-function: ease-in-out;
  color: var(--color-fg-calm);
  background: var(--color-bg-calm);

  :hover {
    background: var(--color-active-muted);
    color: var(--color-active);
  }

  ${(props) =>
    props.active &&
    css`
      background: var(--color-active);
      color: var(--color-fg-on-emphasis);
    `}
`;

const SearchIcon = () => (
  <SearchIconSvg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M11 19.1758C15.4183 19.1758 19 15.5941 19 11.1758C19 6.7575 15.4183 3.17578 11 3.17578C6.58172 3.17578 3 6.7575 3 11.1758C3 15.5941 6.58172 19.1758 11 19.1758Z" />
      <path d="M21.0004 21.1742L16.6504 16.8242" />
    </g>
  </SearchIconSvg>
);

export default function Catalog({ data }) {
  const [animals, setAnimals] = React.useState(
    data?.allContentfulAnimal?.nodes || []
  );

  const [page, setPage] = React.useState(0);
  const [animalState, setAnimalState] = React.useState("");

  React.useEffect(() => {
    window
      .fetch(`/api/get-animal?limit=8&skip=${page * 8}`, {
        method: `GET`,
        headers: {
          "Content-Type": `application/json`,
        },
      })
      .then((res) => {
        return res.json();
      })
      .then((data: any) => {
        console.log(data);
        setAnimals(data?.animals);
      });
  }, [page]);

  return (
    <Layout title="Our Snugglers" isDogs active="home">
      <Head>
        <title>Pet Snuggles (Next.js)</title>
      </Head>
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
          <Search
            type="search"
            placeholder="Search pets"
            onBlur={(e: any) => {
              setAnimalState("");
              
              if (!e.currentTarget.value) {
                setAnimalState("");
                setAnimals(data?.allContentfulAnimal?.nodes);
              }

              window
                .fetch(
                  `/api/search?searchText=${e.currentTarget.value}`,
                  {
                    method: `POST`,
                    headers: {
                      "Content-Type": `application/json`,
                    },
                  }
                )
                .then((res) => {
                  return res.json();
                })
                .then((data: any) => {
                  console.log(data)
                  setAnimals(data?.animals);
                });
            }}
          />
        </SearchContainer>
      </FilterAndSearch>

      <Animals type={animalState || `dogs`} data={animals || []} />
      <Pagination>
        {[...Array(data?.allContentfulAnimal?.pageInfo?.pageCount).keys()].map(
          (i) => {
            return (
              <Link passHref href="/">
                <PaginationLink
                  active={page === i}
                  to="/"
                  onClick={() => {
                    setPage(i);
                  }}
                >
                  {i + 1}
                </PaginationLink>
              </Link>
            );
          }
        )}
      </Pagination>
    </Layout>
  );
}

export async function getServerSideProps() {
  const QUERY = `
  query {
    allContentfulAnimal(limit: 8, skip: 0, sort: { fields: name }) {
      nodes {
        id
        name
        animalType
        about {
          about
        }
        image {
          url
          gatsbyImageData(height: 200, width: 200, placeholder: NONE)
        }
      }
      pageInfo {
        pageCount
      }
    }
  }
  `;

  const result = await client.query(QUERY, {}).toPromise();

  return {
    props: { data: result.data },
  };
}
