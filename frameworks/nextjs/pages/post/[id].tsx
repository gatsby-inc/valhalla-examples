import React from "react";
import parse from "html-react-parser";
import Head from 'next/head'

import { Layout } from "../components/Layout";
import * as styles from "../../../styles/article.module.css"

export default function PostTemplate({ data }) {
  const featuredImage = {
    data: data?.featuredImage?.node?.mediaItemUrl,
    alt: data?.featuredImage?.node?.altText || ``,
  };

  return (
    <Layout>
      <article
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <Head>
            <title>{data?.title ? parse(data?.title) : "Post"} / Pet Snuggles (Next.js)</title>
          </Head>
          <h1 itemProp="headline" className={styles.title}>
            {parse(data?.title)}
          </h1>
          <p>{`${new Date(Number(data?.date))}`}</p>
          {featuredImage?.data && (
            <img
              src={featuredImage.data}
              alt={featuredImage.alt}
              style={{ marginBottom: "2rem", width: "100%" }}
            />
          )}
        </header>
        {!!data.content && (
          <section itemProp="articleBody" className={styles.article}>
            {parse(data?.content)}
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

export async function getStaticProps({ params }) {
  const QUERY = `
      query PostQuery($id: String!) {
        wpPost(id: { eq: $id }) {
          id
          title
          date
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

  const { data } = await client.query(QUERY, { id: params?.id }).toPromise();

  let post = Object.assign({}, data.wpPost)

  if (!post.featuredImage || !post.featuredImage.node) {
    delete post.featuredImage
  }

  return {
    props: {
      data: post
    },
  };
}

export async function getStaticPaths() {
  const QUERY = `
      {
        allWpPost {
          nodes {
            id
          }
        }
      }
    `;

  const { data } = await client.query(QUERY).toPromise()

  return {
    paths: data.allWpPost.nodes.map(node => ({
      params: node
    })),
    fallback: false
  }
}
