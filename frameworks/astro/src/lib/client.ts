import fetch from 'node-fetch'
import { createClient } from '@urql/core'

const API_URL = import.meta.env.VALHALLA_API_URL

export const client = createClient({
  url: API_URL,
  fetch,
  requestPolicy: `network-only`,
})
