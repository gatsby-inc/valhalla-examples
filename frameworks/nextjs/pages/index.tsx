import React from "react";
import Link from "next/link";
import Head from "next/head";
import clsx from "clsx";

import { Layout } from "./components/Layout";
import { Animals } from "./components/Animals";
import * as paginationStyles from "../../styles/pagination.module.css";
import * as filterStyles from "../../styles/filter.module.css";

import { client } from "./lib/client"

const SearchIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={filterStyles.searchIconSvg}
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
  </svg>
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
      <div className={filterStyles.filterAndSearch}>
        <div className={filterStyles.filters}>
          <button
            className={clsx(filterStyles.filterButton, animalState === `` && filterStyles.filterButtonActive)}
            onClick={() => {
              setAnimalState("");
              setAnimals(data?.allContentfulAnimal?.nodes);
            }}
          >
            All Snugglers
          </button>
          <button
            className={clsx(filterStyles.filterButton, animalState === `dog` && filterStyles.filterButtonActive)}
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
          >
            Dogs
          </button>
          <button
            className={clsx(filterStyles.filterButton, animalState === `cat` && filterStyles.filterButtonActive)}
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
          >
            Cats
          </button>
          <button
            className={clsx(filterStyles.filterButton, animalState === `exotic` && filterStyles.filterButtonActive)}
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
          >
            Exotics
          </button>
        </div>

        <div className={filterStyles.searchContainer}>
          <SearchIcon />
          <input
            className={filterStyles.search}
            type="search"
            placeholder="Search pets"
            onChange={(e: any) => {
              const searchText = e.currentTarget.value
              setAnimalState("");
              
              if (!searchText || searchText.length < 2) {
                setAnimalState("");
                setAnimals(data?.allContentfulAnimal?.nodes);
              }

              window
                .fetch(
                  `/api/search?searchText=${searchText}`,
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
        </div>
      </div>

      <Animals type={animalState || `dogs`} data={animals || []} />

      <nav className={paginationStyles.container}>
        {[...Array(data?.allContentfulAnimal?.pageInfo?.pageCount).keys()].map(
          (i) => {
            return (
              <Link
                passHref href="/"
                key={`catalog-pagination-link-${i}`}
              >
                <button
                  className={clsx(paginationStyles.link, page === i && paginationStyles.linkActive)}
                  to="/"
                  onClick={() => {
                    setPage(i);
                  }}
                >
                  {i + 1}
                </button>
              </Link>
            );
          }
        )}
      </nav>
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
