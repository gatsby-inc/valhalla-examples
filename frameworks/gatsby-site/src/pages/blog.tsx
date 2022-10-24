import React from "react";
import { Link, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import styled, { css } from "styled-components";
import parse from "html-react-parser";

import { Layout } from "../components/Layout";
import { Info } from "../components/Info";

const Posts = styled.ol`
  padding: 0;
  list-style: none;
`;

const PostTitle = styled.h2`
  margin: 0;

  a {
    text-decoration: none;
    color: var(--color-active);
  }
`;

const Article = styled.article`
  display: flex;
  flex-direction: row;
`;

const PageTitle = styled.h1`
  margin: var(--size-6) 0;
  font-size: var(--font-size-6);
`;

const Post = styled.li`
  margin: var(--size-6) 0;
`;

const Thumbnail = styled.div`
  width: 192px;
  flex: 0 0 auto;
  border-radius: var(--radius-4);
  overflow: hidden;
  float: left;
  margin-right: var(--size-5);

  ${(props) =>
    props.placeholder &&
    css`
      background: var(--color-text-lighter);
      height: 192px;
    `}
`;

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
      <PageTitle>Blog</PageTitle>
      <Info cms="WordPress" renderer="ssg" />
      <Posts>
        {posts.map((post) => {
          const title = post.title;

          const featuredImage = {
            data: post.featuredImage?.node?.localFile?.childImageSharp
              ?.gatsbyImageData,
            alt: post.featuredImage?.node?.alt || ``,
          };

          return (
            <Post key={post.uri}>
              <Article
                className="post-list-item"
                itemScope
                itemType="http://schema.org/Article"
              >
                {featuredImage?.data ? (
                  <Thumbnail>
                    <GatsbyImage
                      image={featuredImage.data}
                      alt={featuredImage.alt}
                    />
                  </Thumbnail>
                ) : (
                  <Thumbnail placeholder />
                )}
                <div>
                  <PostTitle>
                    <Link to={`/post/${post.id}/`} itemProp="url">
                      <span itemProp="headline">{parse(title)}</span>
                    </Link>
                  </PostTitle>
                  <small>{post.date}</small>
                  <section itemProp="description">
                    {parse(post.excerpt)}
                  </section>
                </div>
              </Article>
            </Post>
          );
        })}
      </Posts>

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
                gatsbyImageData(quality: 100, layout: FULL_WIDTH)
              }
            }
          }
        }
      }
    }
  }
`;
