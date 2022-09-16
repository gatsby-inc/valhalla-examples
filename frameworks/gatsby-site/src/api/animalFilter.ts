import fetch from "node-fetch";
import { createClient } from "@urql/core";

const API_URL =
  "https://technicaldemomaster76337-01gcw5bcex6hjf0kcc25b5x8va.staging-valhalla-api.io/graphql";

const client = createClient({
  url: API_URL,
  fetch,
});

export default async function getAnimals(req, res) {
  const QUERY = `
    query search {
        allContentfulAnimal(filter: { name: { eq: "${req.body.type}" } } ) {
          nodes {
            __typename
            id
            name
            about {
              __typename
              about
            }
            image {
              __typename
              url
            }
          }
        }
      }
    `;

  const result = await client
    .query(QUERY, { name: { eq: req.body.type } })
    .toPromise();

  console.log(result);

  return res.json({ animals: result?.data?.allContentfulAnimal?.nodes });
}
