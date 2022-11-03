import { client } from '../../lib/client'

export default async function getAnimalFilter(req, res) {
  const QUERY = `
    query search {
        allContentfulAnimal(filter: { animalType: { eq: "${req.body.type}" } }, sort: { name: ASC }) {
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
    `

  const result = await client
    .query(QUERY, { animalType: { eq: req.body.type } })
    .toPromise()

  return res.json({ animals: result?.data?.allContentfulAnimal?.nodes })
}
