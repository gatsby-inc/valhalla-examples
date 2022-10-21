import React from 'react'
import styled from "styled-components";
import { Layout } from "../components/Layout";
import { AnimalDisplay } from "../components/Animals";

import { client } from "../lib/client"

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

export default function AnimalTemplate({ contentfulAnimal }) {
  return (
    <Layout isDogs={true}>
      <Card>
        <AnimalDisplay animal={contentfulAnimal} disableDetails />
      </Card>
    </Layout>
  )
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
  `

  const { data } = await client.query(query, {
    id: context.params.id
  }).toPromise()

  return {
    props: data
  }
}

export async function getStaticPaths() {
  const { data } = await client.query(
    `{
      allContentfulAnimal {
        nodes {
          id
          animalType
        }
      }
    }`
  ).toPromise()

  return {
    paths: data.allContentfulAnimal.nodes.map(node => ({
      params: node
    })),
    fallback: false
  }
}

