import type { NextApiRequest, NextApiResponse } from 'next'

const gqlQuery = `query pokemons($limit: Int, $offset: Int) {
  pokemons(limit: $limit, offset: $offset) {
    count
    next
    previous
    status
    message
    results {
      url
      name
      image
    }
  }
}`

const gqlVariables = {
  limit: 2,
  offset: 2
}

export default async function handler (
  req: NextApiRequest,
  res: NextApiResponse
) {
  const response = await fetch('https://graphql-pokeapi.graphcdn.app/', {
    credentials: 'omit',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: gqlQuery,
      variables: gqlVariables
    }),
    method: 'POST'
  })

  console.log(response)
  res.status(response.status).json(response)
}
