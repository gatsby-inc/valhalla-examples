import type { GatsbyConfig } from "gatsby";

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

let accessToken = process.env.CONTENTFUL_DELIVERY_ACCESS_TOKEN;
let host;

if (process.env.IS_PREVIEW === `true`) {
  accessToken = process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN;
  host = process.env.CONTENTFUL_PREVIEW_HOST;
}

const config: GatsbyConfig = {
  siteMetadata: {
    title: `gatsby`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        url:
          process.env.WPGRAPHQL_URL ||
          `https://valhallademo.wpengine.com/graphql`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        accessToken,
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        host,
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
};

export default config;
