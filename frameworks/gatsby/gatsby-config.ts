import type { GatsbyConfig } from 'gatsby'

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

let accessToken = process.env.CONTENTFUL_DELIVERY_ACCESS_TOKEN
let host

if (process.env.IS_PREVIEW === `true`) {
  accessToken = process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
  host = process.env.CONTENTFUL_PREVIEW_HOST
}

const config: GatsbyConfig = {
  trailingSlash: `ignore`,
  siteMetadata: {
    title: `gatsby`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  flags: {
    PARTIAL_HYDRATION: false,
    SLICES: false,
  },
  plugins: [
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        url:
          process.env.WPGRAPHQL_URL ||
          `https://valhallademo.wpengine.com/graphql`,
        type: {
          MediaItem: {
            createFileNodes: false,
          },
        },
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
    {
      resolve: 'gatsby-source-shopify',
      options: {
        password: process.env.SHOPIFY_SHOP_PASSWORD,
        storeUrl: process.env.GATSBY_SHOPIFY_STORE_URL,
        shopifyConnections: ['collections'],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Pet Snuggles (Gatsby)`,
        short_name: `Pet Snuggles`,
        description: `Examples for Valhalla: The Enterprise Content Hub`,
        start_url: `/`,
        background_color: `#fff`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#6B46C1`,
        display: `standalone`,
        icon: `src/assets/icon.png`,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
}

export default config
