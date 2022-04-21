<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
</script>

<template>
  <main>
       <h1>{{post?.title}}</h1>
      <br />
      <p>{{post?.description}}</p>

      <img :src=post?.featuredImage?.url />
  </main>
</template>

<style>
@import './assets/base.css';

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
}

header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

img {
  max-width: 100%;
}

@media (min-width: 1024px) {
  body {
    display: flex;
    place-items: center;
  }

  #app {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;
  }

  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  .logo {
    margin: 0 2rem 0 0;
  }
}
</style>

<script>
export default {
  data() {
    return {
      loading: false,
      post: null,
      error: null,
    }
  },
  created() {
    // watch the params of the route to fetch the data again
    this.$watch(
      () => this.$route?.params,
      () => {
        this.fetchData()
      },
      // fetch the data when the view is created and the data is
      // already being observed
      { immediate: true }
    )
  },
  methods: {
    async fetchData() {

   const query = {
            query: `
            query { contentfulPage(slug: { eq: "${this.$route.params.slug}" }) { id title slug description     featuredImage {
       url
       
    } } }  
            `
        }

      this.error = this.post = null
      this.loading = true

	const res = await fetch('http://localhost:8800/graphql', {
			method: `POST`,
			headers: {
				'Content-Type': `application/json`
			},
			body: JSON.stringify(query)
		});


		const result = await res.json()

    this.loading = false



    this.post = result.data.contentfulPage


 
    },
  },
}
</script>