import React from "react";
import { Link, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import parse from "html-react-parser";
import clsx from "clsx";

import { Layout } from "../components/Layout";
import { Info } from "../components/Info";
import * as styles from "../../../styles/blog.module.css"

const BlogIndex = ({
  data,
  pageContext: { nextPagePath, previousPagePath },
}) => {
  const posts = data.allWpPost.nodes;

  if (!posts.length) {
    return (
      <Layout>
        <p>
          No blog posts found. Add posts to your WordPress site and they'll
          appear here!
        </p>
      </Layout>
    );
  }

  return (
    <Layout>
      <h1 className={styles.pageTitle}>Blog</h1>
      <Info cms="WordPress" renderer="ssg" />
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
                itemType="http://schema.org/article"
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
                    <Link to={`/post/${post.id}/`} itemProp="url">
                      <span itemProp="headline">{parse(title)}</span>
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

      {previousPagePath && (
        <>
          <Link to={previousPagePath}>Previous page</Link>
          <br />
        </>
      )}
      {nextPagePath && <Link to={nextPagePath}>Next page</Link>}
    </Layout>
  );
};

export default BlogIndex;

export const pageQuery = graphql`
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
                gatsbyImageData(quality: 100, layout: FULL_WIDTH, placeholder: NONE)
              }
            }
          }
        }
      }
    }
  }
`;

export function Head() {
  return (
    <title>Blog / Pet Snuggles (Gatsby)</title>
  )
}