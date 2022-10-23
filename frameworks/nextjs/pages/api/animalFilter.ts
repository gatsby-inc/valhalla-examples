import { client } from "../lib/client"

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
