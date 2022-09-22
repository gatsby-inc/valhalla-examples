import React from "react";
import parse from "html-react-parser";

import { Layout } from "../../components/Layout";

export default function PostTemplate({ serverData }) {
  return (
    <Layout>
      <h1>{serverData?.data.title}</h1>
      <p>{serverData?.data.date}</p>
      <div>{parse(serverData?.data.content)}</div>
    </Layout>
  );
}

import { createClient } from "@urql/core";

const API_URL = "https://valhallademo.wpengine.com/graphql";

const client = createClient({
  url: API_URL,
});

export async function getServerData({ params }) {
  const QUERY = `
      query PostQuery($id: ID!) {
        post(id: $id) {
          id
          date
          title
          content
        }
      }
      `;

  const result = await client.query(QUERY, { id: params?.id }).toPromise();

  return {
    props: {
      result: result,
      data: result?.data?.post,
    },
  };
}
