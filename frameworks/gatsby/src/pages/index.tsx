import React from "react";
import { Layout } from "../components/Layout";
import { AnimalDisplay, Animals } from "../components/Animals";

import {
  ContentfulDogsFieldsEnum,
  SortOrderEnum,
} from "../generated-client/types";
import { GatsbyBinding } from "../generated-client/binding";

export default function Catalog({ serverData }) {
  const [randomDog, setRandomDog] = React.useState();
  console.log(serverData);
  return (
    <Layout title="Our Snugglers" isDogs active="home">
      <main>
        <title>Pup Snuggles</title>
      </main>
      <button
        onClick={() => {
          fetch("/api/giveMeARandomDog")
            .then((res) => {
              return res.json();
            })
            .then(({ dog }) => {
              return setRandomDog(dog);
            });
        }}
      >
        Give me a random dog
      </button>

      {randomDog && <AnimalDisplay animal={randomDog} type="dogs" />}
      <Animals type={`dogs`} data={serverData?.nodes || []} />
    </Layout>
  );
}

export async function getServerData() {
  const { gatsbyClient }: { gatsbyClient: GatsbyBinding} = require('../generated-client/binding')

  const dogs = await gatsbyClient.query.allContentfulDogs({
    sort: {
      fields: [ContentfulDogsFieldsEnum.Name],
      order: [SortOrderEnum.Asc]
    }
  }, `
    {
      nodes {
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
  `)

  return {
    props: dogs
  }
}
