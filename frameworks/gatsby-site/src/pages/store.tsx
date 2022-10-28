import React from "react";
import { graphql } from "gatsby";
import styled, { css } from "styled-components";

import { Layout } from "../components/Layout";
import { Info } from "../components/Info";
import { Animal, AnimalList } from "../components/Animals";

const PageTitle = styled.h1`
  margin: var(--size-6) 0;
  font-size: var(--font-size-6);
`;

export default function Catalog({ data }) {
  return (
    <Layout title="Our Swag" isDogs active="Store">
      <PageTitle>Swag</PageTitle>
      <Info cms="Shopify" renderer="ssg" />
      <AnimalList>
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
      </AnimalList>
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