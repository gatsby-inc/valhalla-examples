import { Animal } from "../../components/Animals";

import { client } from "../../lib/client"

import * as animalStyles from "../../../styles/animals.module.css"
import * as commonStyles from "../../../styles/common.module.css"

async function getData() {
  const QUERY = `
    query {
      allShopifyProduct {
        nodes {
          id
          title
          shopifyId
          createdAt
          featuredImage {
            src
          }
        }
      }
    }
  `

  const { data } = await client.query(QUERY, {}).toPromise()

  return data.allShopifyProduct?.nodes || []

}

export default async function Catalog() {
  const products = await getData()

  return (
    <>
      <h1 className={commonStyles.pageTitle}>Store</h1>
      <div className={animalStyles.animalList}>
        {products?.map(
          ({ shopifyId, title, featuredImage, description }) => {
            const id = shopifyId.replace("gid://shopify/Product/", "")
            return (
              <Animal
                animal={{
                  id,
                  name: title,
                  image: { url: featuredImage?.src },
                  about: {
                    about: description,
                  },
                  href: `/store/${id}`,
                  animalType: "products",
                }}
                key={shopifyId}
              />
            );
          }
        )}
      </div>
    </>
  );
}