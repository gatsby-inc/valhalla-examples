import React from "react";

import { Layout } from "../../components/Layout";
import { AnimalDisplay } from "../../components/Animals";
import { Info } from "../../components/Info";

export default function AnimalTemplate({ serverData }) {
  return (
    <Layout isDogs={serverData?.type === `dog`}>
      <Info cms="Contentful" renderer="ssr" />
      <AnimalDisplay animal={serverData?.data} disableDetails />
    </Layout>
  );
}

import { createClient } from "@urql/core";

const API_URL = process.env.GATSBY_VALHALLA_API_URL;

const client = createClient({
  url: API_URL,
  requestPolicy: `network-only`,
});

export async function getServerData({ params }) {
  const QUERY = `
      query DogQuery($id: String) {
        contentfulAnimal(id: { eq: $id }) {
          id
          name
          about {
            about
          }
          image {
            url
            gatsbyImage(height: 200, width: 200)
          }
        }
      }
      `;

  const result = await client.query(QUERY, { id: params?.id }).toPromise();

  return {
    props: {
      data: result?.data?.contentfulAnimal,
      type: "dog",
    },
  };
}

export function Head() {
  return (
    <title>Pet / Pet Snuggles (Gatsby)</title>
  )
}