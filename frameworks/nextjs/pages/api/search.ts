import { client } from '../lib/client'
 
export default async function getAnimals(req, res) {
  const { searchText } = req.query

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

  const result = await client
    .query(QUERY, {})
    .toPromise();

  const filtered = result?.data?.allContentfulAnimal?.nodes.filter(({ name }) => {
    return new RegExp(searchText.toLowerCase()).test(name.toLowerCase())
  })

  return res.json({ animals: filtered });
}
