
import { GetStaticPropsContext } from 'next'
import { url, init } from '../../service/pokeApiGqlEndpointConfig'
import { queryPokemonDetails } from '../../service/queryPokemonDetails'

export default async function getDetailPageStaticProps (context: GetStaticPropsContext) {
  const name = context.params?.name

  const rawResponse = await fetch(
    url, {
      ...init,
      body: JSON.stringify({
        query: queryPokemonDetails,
        variables: { name }
      })
    })

  const { data } = await rawResponse.json()

  return data?.pokemon_v2_pokemon[0] ?? null
}
