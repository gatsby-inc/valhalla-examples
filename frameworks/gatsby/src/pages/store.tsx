import React from "react";
import { graphql } from "gatsby";

import { Layout } from "../components/Layout";
import { Info } from "../components/Info";
import { Animal } from "../components/Animals";
import { animalList } from "../../../styles/animals.module.css";
import { pageTitle } from "../../../styles/common.module.css";

export default function Catalog({ data }) {
  return (
    <Layout title="Our Swag" isDogs active="Store">
      <h1 className={pageTitle}>Swag</h1>
      <Info cms="Shopify" renderer="ssg" />
      <div className={animalList}>
        {data.allShopifyProduct?.nodes?.map(
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
                key={shopifyId.replace("gid://shopify/Product/", "")}
              />
            );
          }
        )}
      </div>
    </Layout>
  );
}

export const catalogQuery = graphql`
  query {
    allShopifyProduct {
      nodes {
        id
        title
        shopifyId
        description
        featuredMedia {
          shopifyId
          preview {
            image {
              originalSrc
            }
          }
        }
      }
    }
  }
`;

export function Head() {
  return (
    <title>Store / Pet Snuggles (Gatsby)</title>
  )
}