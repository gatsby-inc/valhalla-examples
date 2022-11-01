import Link from "next/link";
import clsx from "clsx";

import { Animals } from "../../components/Animals"

import * as paginationStyles from "../../../styles/pagination.module.css";

import { client } from "../../lib/client"

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

export default async function Page() {
  const data = await getData()

  const animals = data?.allContentfulAnimal?.nodes || []
  const setAnimals = () => data.animals
  const page = {}
  const setPage = () => page

  return (
    <>
      <Animals data={animals} />
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
