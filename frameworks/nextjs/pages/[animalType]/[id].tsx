import React from "react";
import styled from "styled-components";
import { Layout } from "../components/Layout";
import { AnimalDisplay } from "../components/Animals";

import { client } from "../lib/client";

export default function AnimalTemplate({ contentfulAnimal }) {
  return (
    <Layout isDogs={true}>
      <AnimalDisplay animal={contentfulAnimal} disableDetails />
    </Layout>
  );
}

export async function getStaticProps(context) {
  const query = `
    query GetAnimalById($id: String!) {
      contentfulAnimal(id: { eq: $id }) {
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

  const { data } = await client
    .query(query, {
      id: context.params.id,
    })
    .toPromise();

  return {
    props: data,
  };
}

export async function getStaticPaths() {
  const { data } = await client
    .query(
      `{
      allContentfulAnimal {
        nodes {
          id
          animalType
        }
      }
    }`
    )
    .toPromise();

  return {
    paths: data.allContentfulAnimal.nodes.map((node) => ({
      params: node,
    })),
    fallback: false,
  };
}
