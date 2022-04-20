<script context="module">
	import { client } from '$lib/contentful';

	export async function load() {
		// TODO: make this use Gatsby's data layer
		const data = await client.getEntries('homepage', {
			content_type: 'homepage'
		})

		const page = data.items.reduce((merged, item) => {
			Object.keys(item.fields).forEach(key => {
				merged[key] = item.fields[key]
			})
			return merged
		}, {})

		console.log(page)

		return {
			props: {
				page
			}
		}
	}

	export const prerender = true
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
	<h2>{page.kicker}</h2>

	<img class="hero" src={page.image.fields.file.url} alt={page.image.fields.title} />
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
