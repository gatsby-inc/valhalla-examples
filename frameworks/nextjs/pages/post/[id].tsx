import React from "react";
import styled from "styled-components";
import parse from "html-react-parser";
import Head from 'next/head'

import { Layout } from "../components/Layout";

const PostTitle = styled.h1`
  margin: var(--size-6) 0 var(--size-1);
  font-size: auto;
  font-size: var(--font-size-6);
`;

const ArticleBody = styled.section`
  margin: 0 0 var(--size-7);
  line-height: var(--lineheight-4);
  max-width: 768px;
  font-size: var(--font-size-3);

  h2,
  h3,
  h4,
  h5,
  h6,
  strong,
  b {
    font-weight: var(--font-weight-6);
  }

  ul,
  ol {
    padding-left: 0;
  }

  ul ul,
  ol ol,
  ul ol,
  ol ul {
    padding-left: var(--size-4);
  }

  ul li,
  ol li {
    padding: var(--size-1) 0;
  }

  blockquote {
    border-left: 2px solid var(--color-active);
    color: var(--color-active);
    margin: 0;
    padding-left: var(--size-4);

    code {
      color: var(--color-active);
      background: var(--color-active-muted);
    }
  }

  a {
    color: var(--color-active);
    text-underline-offset: 2px;
  }

  img {
    max-width: 100%;
  }

  code,
  pre {
    font-family: Menlo, monospace;
  }

  code {
    background: var(--color-bg-muted);
    padding: var(--size-1);
    border-radius: var(--radius-4);
    font-size: 92%;
  }

  pre {
    overflow: scroll;
    background: var(--color-bg-muted);
    padding: var(--size-5);
    border-radius: var(--radius-4);
  }

  pre code {
    background: transparent;
    padding: 0;
    border-radius: 0;
  }
`;

export default function PostTemplate({ data }) {
  const featuredImage = {
    data: data?.featuredImage?.node?.mediaItemUrl,
    alt: data?.featuredImage?.node?.altText || ``,
  };

  return (
    <Layout>
      <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <Head>
            <title>{data?.title ? parse(data?.title) : "Post"} / Pet Snuggles (Next.js)</title>
          </Head>
          <PostTitle itemProp="headline">
            {parse(data?.title)}
          </PostTitle>
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
          <ArticleBody itemProp="articleBody">
            {parse(data?.content)}
          </ArticleBody>
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
