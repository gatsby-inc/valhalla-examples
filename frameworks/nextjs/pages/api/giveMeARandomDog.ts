import { gatsbyClient } from "../generated-client/binding"

export default async function getRandomDog(req, res) {
  const dogs = await gatsbyClient.query.allContentfulCats(
    {},
    `{ 
    nodes { 
      id
      name
      about {
        about
      } 
      image {
        url
      }
    }
  }`
  );

  const dog = dogs?.nodes[Math.floor(Math.random() * dogs?.nodes?.length)];

  return res.json({ dog });
}
