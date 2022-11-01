import parse from "html-react-parser";

import { client } from "../../../lib/client"

import * as styles from "../../../../styles/article.module.css"
import Content from './content'

export async function generateStaticParams() {
  const QUERY = `
      {
        allWpPost {
          nodes {
            id
          }
        }
      }
    `;

  const { data } = await client.query(QUERY, {}).toPromise()
  
  return data.allWpPost.nodes
}


async function getData(params) {
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

  return post
}

export default async function PostTemplate({ params }) {
  const post = await getData(params)

  const featuredImage = {
    data: post?.featuredImage?.node?.mediaItemUrl,
    alt: post?.featuredImage?.node?.altText || ``,
  };

  return (
    <>
      <article
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <h1 itemProp="headline" className={styles.title}>
            {parse(post?.title)}
          </h1>
          <p>{`${new Date(Number(post?.date))}`}</p>
          {featuredImage?.data && (
            <img
              src={featuredImage.data}
              alt={featuredImage.alt}
              style={{ marginBottom: "2rem", width: "100%" }}
            />
          )}
        </header>
        <Content content={post.content} />
      </article>
    </>
  );
}