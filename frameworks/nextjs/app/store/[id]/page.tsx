import { AnimalDisplay as Animal } from "../../../components/Animals";

import { client } from "../../../lib/client"

import * as commonStyles from "../../../../styles/common.module.css"

export async function generateStaticParams() {
  const QUERY = `
      {
        allShopifyProduct {
          nodes {
            shopifyId
          }
        }
      }
    `;

  const { data } = await client.query(QUERY, {}).toPromise()
  
  return (data?.allShopifyProduct?.nodes || []).map(node => {
    return Object.assign({}, node, {
      id: node.shopifyId.replace("gid://shopify/Product/", "")
    })
  })
}

async function getData(params) {
  const QUERY = `
    query GetShopifyProductById($id: String!) {
      shopifyProduct(id: {eq: $id }) {
        id
        title
        description
        shopifyId
        createdAt
        featuredImage {
          src
        }
      }
    }
  `

  const { data } = await client.query(QUERY, {
    id: `gid://shopify/Product/${params.id}`
  }).toPromise()

  return data?.shopifyProduct || {} as any

}

export default async function PetStore({ params }) {
  const pet = await getData(params)

  return (
    <>
      <h1 className={commonStyles.pageTitle}>{pet.title}</h1>
        <Animal
          animal={{
            id: pet.id,
            name: pet.title,
            image: { url: pet.featuredImage?.src },
            about: {
              about: pet.description,
            },
            animalType: "products",
          }}
          key={pet.id}
          type={"product"}
          disableDetails={true}
        />
    </>
  );
}