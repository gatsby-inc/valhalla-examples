import Link from "next/link";
import clsx from "clsx";

import { Animals } from "../components/Animals";
import * as paginationStyles from "../../styles/pagination.module.css";
import * as filterStyles from "../../styles/filter.module.css";

import { client } from "../lib/client"

async function getData() {
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

  return result.data
}

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

export default async function Catalog() {
  const data = await getData()

  const animals = data.animals
  const setAnimals = () => data.animals
  const page = {}
  const setPage = () => page

  // React.useEffect(() => {
  //   window
  //     .fetch(`/api/get-animal?limit=8&skip=${page * 8}`, {
  //       method: `GET`,
  //       headers: {
  //         "Content-Type": `application/json`,
  //       },
  //     })
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((data: any) => {
  //       console.log(data);
  //       setAnimals(data?.animals);
  //     });
  // }, [page]);

  return (
    <>
      <div className={filterStyles.filterAndSearch}>
        <div className={filterStyles.filters}>
          <button
            className={clsx(filterStyles.filterButton)}
          >
            All Snugglers
          </button>
          <button
            className={clsx(filterStyles.filterButton)}
          >
            Dogs
          </button>
          <button
            className={clsx(filterStyles.filterButton)}
          >
            Cats
          </button>
          <button
            className={clsx(filterStyles.filterButton)}
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
          />
        </div>
      </div>

      <Animals data={animals || []} />
      <nav className={paginationStyles.container}>
        {new Array(data?.allContentfulAnimal?.pageInfo?.pageCount).fill(undefined).map(
          (_, i) => {
            return (
              <Link passHref href="/" key={`catalog-pagination-link-${i}`} legacyBehavior>
                <button
                  className={clsx(paginationStyles.link, page === i && paginationStyles.linkActive)}
                >
                  {i + 1}
                </button>
              </Link>
            );
          }
        )}
      </nav>
    </>
  );
}
