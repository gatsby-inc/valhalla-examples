import React from "react";
import parse from "html-react-parser";

import { Layout } from "../../components/Layout";
import { Info } from "../../components/Info";
import * as styles from "../../../../styles/article.module.css"

export default function PostTemplate({ serverData }) {
  const featuredImage = {
    data: serverData?.data?.featuredImage?.node?.mediaItemUrl,
    alt: serverData?.data?.featuredImage?.node?.altText || ``,
  };

  console.log(featuredImage, '##')

  return (
    <Layout>
      <Info cms="WordPress" renderer="ssr" />
      <article
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <h1 itemProp="headline" className={styles.title}>
            {parse(serverData?.data.title)}
          </h1>
          <p>{`${new Date(Number(serverData?.data.date))}`}</p>
          {featuredImage?.data && (
            <img
              src={featuredImage.data}
              alt={featuredImage.alt}
              style={{ marginBottom: "2rem", width: "100%" }}
            />
          )}
        </header>
        {!!serverData.data.content && (
          <section itemProp="articleBody" className={styles.article}>
            {parse(serverData?.data.content)}
          </section>
        )}
      </article>
    </Layout>
  );
}

import { createClient } from "@urql/core";

const API_URL = process.env.GATSBY_VALHALLA_API_URL as string;

const client = createClient({
  url: API_URL,
  requestPolicy: `network-only`,
});

export async function getServerData({ params }) {
  const QUERY = `
      query PostQuery($id: String!) {
        wpPost(id: { eq: $id }) {
          id
          title
          date
          content
          featuredImage {
            node {
              id
              mediaItemUrl
              altText
            }
          }
        }
      }
      `;

  const result = await client.query(QUERY, { id: params?.id }).toPromise();

  return {
    props: {
      result: result,
      data: result?.data?.wpPost,
    },
  };
}

export function Head() {
  return (
    <title>Post / Pet Snuggles (Gatsby)</title>
  )
}