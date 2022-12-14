import { client } from '@/lib/client'

import { AnimalDisplay } from '@/components/Animals'
import { Info } from '@/components/Info'

async function getData(params) {
  const query = `
    query GetAnimalById($id: String!) {
      contentfulAnimal(id: { eq: $id }) {
        id
        name
        animalType
        about {
          about
        }
        image {
          url
          gatsbyImageData(height: 200, width: 200, placeholder: NONE)
        }
      }
    }
  `

  const { data } = await client
    .query(query, {
      id: params.id,
    })
    .toPromise()

  return data?.contentfulAnimal || {}
}

export default async function AnimalTemplate({ params }) {
  const animal = await getData(params)

  return (
    <>
      <Info cms="Contentful" renderer="ssg" />
      <AnimalDisplay animal={animal} type={animal.type} disableDetails />;
    </>
  )
}

export async function generateStaticParams() {
  const { data } = await client
    .query(
      `{
      allContentfulAnimal {
        nodes {
          id
          animalType
        }
      }
    }`,
      {}
    )
    .toPromise()

  return data?.allContfulAnimal?.nodes || []
}
