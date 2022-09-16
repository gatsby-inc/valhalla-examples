import React from "react";
import styled from "styled-components";
import { Layout } from "../../components/Layout";
import { AnimalDisplay } from "../../components/Animals";

const Card = styled.div`
  background: #ffffff;
  border-radius: 8px;
  max-width: 640px;
  margin: 24px auto;
  align-self: center;
  overflow: hidden;
  padding: 20px;
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
      <Card>
        <AnimalDisplay animal={serverData?.data} disableDetails />
      </Card>
    </Layout>
  );
}

import { createClient } from "@urql/core";

const API_URL =
  "https://technicaldemomaster76337-01gcw5bcex6hjf0kcc25b5x8va.staging-valhalla-api.io/graphql";

const client = createClient({
  url: API_URL,
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
