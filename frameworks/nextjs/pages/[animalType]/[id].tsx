import React from "react";
import Head from 'next/head'

import { Layout } from "../../components/Layout";
import { AnimalDisplay } from "../../components/Animals";

import { client } from "../../lib/client";

export default function AnimalTemplate({ contentfulAnimal }) {
  return (
    <Layout>
      <Head>
        <title>{contentfulAnimal?.name ? contentfulAnimal.name : "Pet"} / Pet Snuggles (Next.js)</title>
      </Head>
      <AnimalDisplay animal={contentfulAnimal} type={contentfulAnimal.type} disableDetails />
    </Layout>
  );
}

export async function getStaticProps(context) {
  const query = `
    query GetAnimalById($id: String!) {
      contentfulAnimal(id: { eq: $id }) {
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
    }`,
      {}
    )
    .toPromise();

  return {
    paths: data.allContentfulAnimal.nodes.map((node) => ({
      params: node,
    })),
    fallback: false,
  };
}
