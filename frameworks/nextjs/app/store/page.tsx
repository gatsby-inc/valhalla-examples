import { Info } from "../../components/Info";
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
      <h1 className={commonStyles.pageTitle}>Swag</h1>
      <Info cms="Shopify" renderer="ssg" />
      <div className={animalStyles.animalList}>
        {products?.map(
          ({ shopifyId, title, featuredMedia, description }) => {
            return (
              <Animal
                animal={{
                  id: shopifyId.replace("gid://shopify/Product/", ""),
                  name: title,
                  image: { url: featuredMedia?.preview?.image?.originalSrc },
                  about: {
                    about: description,
                  },
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