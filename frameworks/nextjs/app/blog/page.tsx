import Link from "next/link";
import { GatsbyImage } from "gatsby-plugin-image";
import parse from "html-react-parser";
import clsx from "clsx";

import * as styles from "@/styles/blog.module.css";

import { client } from "@/lib/client";
import { Info } from '@/components/Info'

async function getData() {
  const query = `
  query WordPressPostArchive {
    allWpPost(
      sort: { fields: [date], order: DESC }
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
  `;

  const { data } = await client.query(query, {}).toPromise();

  return data?.allWpPost?.nodes || [];
}

export default async function BlogIndex() {
  const posts = await getData();

  return (
    <>
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
                itemType="http://schema.org/Article"
              >
                {featuredImage.data ? (
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
                    <Link
                      href={`/blog/${post.id}/`}
                      passHref={true}
                      itemProp="headline"
                      legacyBehavior
                    >
                      {parse(title)}
                    </Link>
                  </h2>
                  {post.date && <small>{post.date}</small>}
                  <section itemProp="description">
                    {parse(post.excerpt)}
                  </section>
                </div>
              </article>
            </li>
          );
        })}
      </ol>
    </>
  );
}
