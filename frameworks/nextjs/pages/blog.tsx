import React from "react";
import Link from 'next/link'
import Head from 'next/head'
import { GatsbyImage  } from "gatsby-plugin-image";
import parse from "html-react-parser";
import clsx from "clsx";

import { client } from './lib/client'
import { Layout } from "./components/Layout";
import styles from "../../styles/blog.module.css"

const BlogIndex = ({
  data,
  pageContext: { nextPagePath, previousPagePath },
}) => {
  const posts = data.allWpPost.nodes;

  if (!posts.length) {
    return (
      <Layout>
        <p>
          No blog posts found. Add posts to your WordPress site and they will
          appear here!
        </p>
      </Layout>
    );
  }

  return (
    <Layout>
      <Head>
        <title>Blog / Pet Snuggles (Next.js)</title>
      </Head>
      <h1 className={styles.pageTitle}>Blog</h1>
      <ol className={styles.posts}>
        {posts.map((post) => {
          const title = post.title;

          const featuredImage = {
            data: post.featuredImage?.node?.localFile?.childImageSharp
              ?.gatsbyImageData,
            alt: post.featuredImage?.node?.alt || ``,
          };

          return (
            <li key={post.uri} className={styles.post}>
              <article
                className={styles.article}
                itemScope
                itemType="http://schema.org/Article"
              >
                {featuredImage?.data ? (
                  <div className={styles.thumbnail}>
                    <GatsbyImage
                      image={featuredImage.data}
                      alt={featuredImage.alt}
                    />
                  </div>
                ) : (
                  <div className={clsx(styles.thumbnail, styles.placeholder)} />
                )}
                <div>
                  <h2 className={styles.postTitle}>
                    <Link href={`/post/${post.id}/`} passHref={true}>
                      <a itemProp="headline">{parse(title)}</a>
                    </Link>
                  </h2>
                  <small>{post.date}</small>
                  <section itemProp="description">
                    {parse(post.excerpt)}
                  </section>
                </div>
              </article>
            </li>
          );
        })}
      </ol>

      {/* {previousPagePath && (
        <>
          <Link href={previousPagePath}>Previous page</Link>
          <br />
        </>
      )}
      {nextPagePath && <Link href={nextPagePath}>Next page</Link>} */}
    </Layout>
  );
};

export default BlogIndex;

export async function getStaticProps() {
  const query = `
  query WordPressPostArchive {
    allWpPost(
      sort: { fields: [date], order: DESC } #   limit: $postsPerPage #   skip: $offset
    ) {
      nodes {
        excerpt
        uri
        id
        date(formatString: "MMMM DD, YYYY")
        title
        featuredImage {
          node {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData(quality: 100, layout: FULL_WIDTH)
              }
            }
          }
        }
      }
    }
  }
  `

  const { data } = await client.query(query, {}).toPromise()

  return {
    props: {
      data,
      pageContext: {}
    }
  }
}