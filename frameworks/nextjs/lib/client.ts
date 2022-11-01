import { createClient } from "@urql/core";

const API_URL = process.env.GATSBY_VALHALLA_API_URL;

export const client = createClient({
  url: API_URL,
  fetch: fetch,
  requestPolicy: `network-only`,
});
