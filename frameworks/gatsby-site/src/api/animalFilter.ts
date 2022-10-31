import fetch from "node-fetch";
import { createClient } from "@urql/core";

const API_URL = process.env.GATSBY_VALHALLA_API_URL;

const client = createClient({
  url: API_URL,
  fetch,
  requestPolicy: `network-only`,
});

export default async function getAnimalFilter(req, res) {
  const QUERY = `
    query search {
        allContentfulAnimal(filter: { animalType: { eq: "${req.body.type}" } }, sort: { fields: name }) {
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
              gatsbyImage(height: 200, width: 200, placeholder: NONE)
            }
          }
        }
      }
    `;

  const result = await client
    .query(QUERY, { animalType: { eq: req.body.type } })
    .toPromise();

  console.log(result);

  return res.json({ animals: result?.data?.allContentfulAnimal?.nodes });
}
