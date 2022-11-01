import Link from "next/link";
import clsx from "clsx";

import { Animals } from "@/components/Animals";
import { Info } from '@/components/Info'

import * as paginationStyles from "@/styles/pagination.module.css";

import { client } from "@/lib/client";

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

  const { data } = await client.query(QUERY, {}).toPromise();

  return [
    data?.allContentfulAnimal?.nodes || [],
    data?.allContentfulAnimal?.pageInfo,
  ];
}

export default async function Page() {
  const [animals, pageInfo] = await getData();
  const currentPage = 0;

  return (
    <>
      <Info cms="Contentful" renderer="ssg" />
      <Animals data={animals} />
      <nav className={paginationStyles.container}>
        {new Array(pageInfo?.pageCount).fill(undefined).map((_, i) => {
          const page = i + 1;
          return (
            <Link
              passHref
              href={`/page/${page}`}
              key={`catalog-pagination-link-${i}`}
              legacyBehavior
            >
              <a
                className={clsx(
                  paginationStyles.link,
                  page === currentPage && paginationStyles.linkActive
                )}
              >
                {page}
              </a>
            </Link>
          );
        })}
      </nav>
    </>
  );
}
