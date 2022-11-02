import React from 'react'

import { Layout } from '../../components/Layout'
import { Info } from '../../components/Info'
import { AnimalDisplay } from '../../components/Animals'

export default function AnimalTemplate({ serverData }) {
  return (
    <Layout isDogs={serverData?.type === `dog`}>
      <Info cms="Shopify" renderer="ssr" />
      <AnimalDisplay animal={serverData?.data} disableDetails />
    </Layout>
  )
}

import { createClient } from '@urql/core'

const API_URL = process.env.GATSBY_VALHALLA_API_URL

const client = createClient({
  url: API_URL,
  requestPolicy: `network-only`,
})

export async function getServerData({ params }) {
  const QUERY = `
      query ProductQuery($id: String) {
        shopifyProduct(id: { eq: $id }) {
            id
            title
            description
            featuredImage {
              originalSrc
            }
        }
      }
      `

  const result = await client
    .query(QUERY, { id: `gid://shopify/Product/${params?.id}` })
    .toPromise()

  console.log(result)

  const data = result?.data?.shopifyProduct
  return {
    props: {
      data: {
        name: data?.title,
        about: {
          about: data?.description,
        },
        image: { url: data?.featuredImage?.originalSrc },
      },
      type: 'products',
    },
  }
}

export function Head() {
  return <title>Products / Pet Snuggles (Gatsby)</title>
}
