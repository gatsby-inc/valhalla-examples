import { client } from '../lib/client'
 
export default async function getAnimals(req, res) {
  const QUERY = `
    query search($skip: Int!, $limit: Int!) {
        allContentfulAnimal(skip: $skip, limit: $limit, sort: { fields: name } ) {
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

  const result = await client
    .query(QUERY, { skip: parseInt(req.query.skip, 10), limit: parseInt(req.query.limit, 10) })
    .toPromise();

  return res.json({ animals: result?.data?.allContentfulAnimal?.nodes });
}
