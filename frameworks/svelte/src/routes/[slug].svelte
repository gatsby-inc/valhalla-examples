<script context="module">
	// import { client } from '$lib/contentful';

	export async function load({ fetch, params }) {

        console.log(params, '##')



        // console.log(`{"query":"query { contentfulPage(slug: { eq: "${params.slug}"}) { nodes { id slug } }  }"}`)

        const query = {
            query: `
            query { contentfulPage(slug: { eq: "${params.slug}" }) { id title slug description     featuredImage {
       url
       
    } } }  
            `
        }

		const res = await fetch('http://localhost:8800/graphql', {
			method: `POST`,
			headers: {
				'Content-Type': `application/json`
			},
			body: JSON.stringify(query)
		});


		const result = await res.json()

		return {
			props: {
				page: result?.data?.contentfulPage,
			}
		};
	}

	export const prerender = true;
</script>

<script>
	export let page;
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<section>
	<h1>
		{page.title}
	</h1>
    <p>{page?.description}</p>

    <img src={page?.featuredImage?.url} />
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}

	.hero {
		max-width: 100%;
	}

    img {
        max-width: 100%;
    }

	h1 {
		width: 100%;
	}

	.welcome {
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}
</style>
