import React from "react";
import styled from "styled-components";

import { Layout } from "../../components/Layout";
import { Info } from "../../components/Info";
import { AnimalDisplay } from "../../components/Animals";

const Card = styled.div`
  background: var(--color-background);
  border-radius: var(--radius-4);
  max-width: 640px;
  margin: var(--size-4) auto;
  align-self: center;
  overflow: hidden;
  padding: var(--size-4);
  box-sizing: content-box;

  @media only screen and (max-width: 500px) {
    width: 100%;
    flex: auto;
    height: auto;
  }
`;

export default function AnimalTemplate({ serverData }) {
  return (
    <Layout isDogs={serverData?.type === `dog`}>
      <Info cms="Shopify" renderer="ssg" />
      <Card>
        <AnimalDisplay animal={serverData?.data} disableDetails />
      </Card>
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
      query ProductQuery($id: String) {
        shopifyProduct(id: { eq: $id }) {
            id
            title
            description
            featuredImage {
              originalSrc
            }
        }
      }
      `;

  const result = await client
    .query(QUERY, { id: `gid://shopify/Product/${params?.id}` })
    .toPromise();

  console.log(result);

  const data = result?.data?.shopifyProduct;
  return {
    props: {
      data: {
        name: data?.title,
        about: {
          about: data?.description,
        },
        image: { url: data?.featuredImage?.originalSrc },
      },
      type: "products",
    },
  };
}
