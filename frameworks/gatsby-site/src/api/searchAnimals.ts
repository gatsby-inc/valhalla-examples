import fetch from "node-fetch";
import { createClient } from "@urql/core";

const API_URL = process.env.GATSBY_VALHALLA_API_URL;

const client = createClient({
  url: API_URL,
  fetch,
  requestPolicy: `network-only`,
});

export default async function searchAnimals(req, res) {
  const QUERY = `
    query search {
        allContentfulAnimal(sort: { fields: name }) {
          nodes {
            __typename
            id
            name
            animalType
            about {
              __typename
              about
            }
            image {
              __typename
              url
              gatsbyImageData(height: 200, width: 200, placeholder: NONE)
            }
          }
        }
      }
    `;

  const searchText = req.query.searchText;

  const result = await client.query(QUERY, {}).toPromise();

  const nodes = result?.data?.allContentfulAnimal?.nodes;

  const nodesFiltered = nodes.filter(({ name }: any) => {
    return new RegExp(searchText.toLowerCase()).test(name?.toLowerCase());
  });

  return res.json({ animals: nodesFiltered });
}
