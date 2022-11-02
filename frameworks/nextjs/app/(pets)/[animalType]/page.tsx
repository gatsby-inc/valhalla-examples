import { Animals } from "@/components/Animals";

import { client } from "@/lib/client";
import { Info } from '@/components/Info'

async function getData(params) {
  const QUERY = `
    query GetContentfulAnimalsByType($animalType: String!) {
      allContentfulAnimal(filter: {
        animalType: { eq: $animalType }
      }) {
        nodes {
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
        pageInfo {
          pageCount
        }
      }
    }
  `;

  const { data, error } = await client
    .query(QUERY, {
      animalType: params.animalType.slice(0, -1), // remove the "s"
    })
    .toPromise();

  return [
    data?.allContentfulAnimal?.nodes,
    data?.allContentfulAnimal?.pageInfo || {},
  ];
}

export default async function Page({ params }) {
  const [animals, pageInfo] = await getData(params);

  return (
    <>
      <Info cms="Contentful" renderer="ssg" />
      <Animals data={animals} />
    </>
  );
}
