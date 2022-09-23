import React from "react";
import parse from "html-react-parser";

import { Layout } from "../../components/Layout";

export default function PostTemplate({ serverData }) {
  const featuredImage = {
    data: serverData?.data?.featuredImage?.node?.mediaItemUrl,
    alt: serverData?.data?.featuredImage?.node?.altText || ``,
  };

  return (
    <Layout>
      <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <h1 itemProp="headline">{parse(serverData?.data.title)}</h1>
          <p>{serverData?.data.date}</p>
          {featuredImage?.data && (
            <img
              src={featuredImage.data}
              alt={featuredImage.alt}
              style={{ marginBottom: "2rem", width: "100%" }}
            />
          )}
        </header>
        {!!serverData.data.content && (
          <section itemProp="articleBody">
            {parse(serverData?.data.content)}
          </section>
        )}
      </article>
    </Layout>
  );
}

import { createClient } from "@urql/core";

const API_URL = "https://valhallademo.wpengine.com/graphql";

const client = createClient({
  url: API_URL,
});

export async function getServerData({ params }) {
  const QUERY = `
      query PostQuery($id: ID!) {
        post(id: $id) {
          id
          date
          title
          content
          featuredImage {
            node {
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
      data: result?.data?.post,
    },
  };
}
