import { url, init } from '../../service/pokeApiGqlEndpointConfig'
import { queryAllPokemonsNames } from '../../service/queryAllPokemonsNames'

export default async function getDetailPageStaticPaths () {
  const rawResponse = await fetch(
    url, {
      ...init,
      body: JSON.stringify({
        query: queryAllPokemonsNames
      })
    })

  const { data } = await rawResponse.json()

  const paths = data?.pokemon_v2_pokemon?.map(
    (path: any) => {
      return {
        params: {
          name: path.name
        }
      }
    }) ?? []

  return paths
}
