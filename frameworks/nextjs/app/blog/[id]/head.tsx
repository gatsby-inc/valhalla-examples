import { client } from '@/lib/client'

async function getData(params) {
  const QUERY = `
      query PostQuery($id: String!) {
        wpPost(id: { eq: $id }) {
          title
        }
      }
      `

  const { data } = await client.query(QUERY, { id: params?.id }).toPromise()

  let post = Object.assign({}, data?.wpPost || {})

  return post
}

export default async function Head({ params }) {
  const post = await getData(params)

  return (
    <>
      <title>Pet Snuggles | Blog Post | Valhalla Content Hub and Next.js</title>
      <meta name="description" content={`Valhalla and ${post.description}`} />
    </>
  )
}
