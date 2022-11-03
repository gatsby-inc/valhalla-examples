<img alt="Valhalla" src="https://user-images.githubusercontent.com/21834/199619393-8862aaed-0146-49b4-9304-f9e42af48c4d.png" width="48" />

# Valhalla (Examples)

This repository contains a number of examples of using Valhalla and a given framework (like Next.js, Astro, and of course Gatsby). Other contributions are welcome.

Please make sure that a given framework has not already been added, and if you'd like to augment existing, PRs _so_ welcome, and we'd love to make sure the code matches idiomatic standards for that given framework for data fetching, code standards, etc.

First, run `yarn` in the root of the repository after cloning. Then, run `yarn` in the given framework folder (or new framework) to install dependencies.

## Frameworks

### [Gatsby](./frameworks/gatsby)

[View live site](https://petsnugglesgatsby.gatsbyjs.io/)

_Note: since the Gatsby site produces the GraphQL API, it currently requires additional environment variables that are internal to the Gatsby team. The other examples, however, work off of the produced GraphQL API_

```bash
cd frameworks/gatsby
yarn start
```

### [Next.js](./frameworks/nextjs)

[View live site](https://valhalla-nextjs.vercel.app/)

```bash
cd frameworks/nextjs
yarn dev

```

### [Astro](./frameworks/astro)

[Link to Site](https://astro-valhalla.netlify.app/)

```bash
cd frameworks/astro
yarn dev
```

### Content Sources

- Contentful for the pups, cats, and exotics
- WordPress for the blog
- Shopify for the e-commerce functionality

- 🚀 Valhalla API for powering them all, and producing a unified GraphQL API for use with any framework
