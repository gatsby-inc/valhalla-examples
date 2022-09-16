import React from "react";
import { Layout } from "../components/Layout";
import { Animals } from "../components/Animals";
import { graphql } from "gatsby";

export default function Catalog({ data }) {
  const [animals, setAnimals] = React.useState(
    data?.allContentfulAnimal?.nodes || []
  );
  const [animalState, setAnimalState] = React.useState("");

  return (
    <Layout title="Our Snugglers" isDogs active="home">
      <main>
        <title>Pup Snuggles</title>
      </main>

      <div
        style={{
          display: `flex`,
          margin: "30px 30px",
          justifyContent: `space-between`,
          maxWidth: `320px`,
        }}
      >
        <button
          onClick={() => {
            setAnimalState("dog");
            window
              .fetch("/api/animalFilter", {
                method: `POST`,
                headers: {
                  "Content-Type": `application/json`,
                },
                body: JSON.stringify({ type: `Boo` }),
              })
              .then((res) => {
                return res.json();
              })
              .then((data: any) => {
                setAnimals(data?.animals);
              });
          }}
          style={{
            background: animalState === `dog` ? `green` : `none`,
            padding: `16px 24px`,
            borderRadius: `4px`,
          }}
        >
          Dogs
        </button>

        <button
          onClick={() => {
            setAnimalState("cat");
            window
              .fetch("/api/animalFilter", {
                method: `POST`,
                headers: {
                  "Content-Type": `application/json`,
                },
                body: JSON.stringify({ type: `Ralph` }),
              })
              .then((res) => {
                return res.json();
              })
              .then((data: any) => {
                setAnimals(data?.animals);
              });
          }}
          style={{
            background: animalState === `cat` ? `green` : `none`,
            padding: `16px 24px`,
            borderRadius: `4px`,
          }}
        >
          Cats
        </button>

        <button
          onClick={() => {
            setAnimalState("exotic");
            window
              .fetch("/api/animalFilter", {
                method: `POST`,
                headers: {
                  "Content-Type": `application/json`,
                },
                body: JSON.stringify({ type: `Bert` }),
              })
              .then((res) => {
                return res.json();
              })
              .then((data: any) => {
                setAnimals(data?.animals);
              });
          }}
          style={{
            background: animalState === `exotic` ? `green` : `none`,
            padding: `16px 24px`,
            borderRadius: `4px`,
          }}
        >
          Exotics
        </button>
      </div>

      <Animals type={animalState || `dogs`} data={animals || []} />
    </Layout>
  );
}

export const catalogQuery = graphql`
  query {
    allContentfulAnimal {
      nodes {
        id
        name
        type
        about {
          about
        }
        image {
          url
        }
      }
    }
  }
`;
