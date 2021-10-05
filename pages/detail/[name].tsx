import type { NextPage, GetStaticPaths, GetStaticProps } from 'next'
import PropTypes from 'prop-types'
import Head from 'next/head'
import Layout from '../../components/layout'
import Section from '../../components/section'
import PokemonProfile from '../../components/pokemonProfile'
import { PokemonBuilder } from '../../model/PokemonBuilder'
import { url, init } from '../../service/pokeApiGqlEndpointConfig'
import { queryPokemonDetails } from '../../service/queryPokemonDetails'
import { queryAllPokemonsNames } from '../../service/queryAllPokemonsNames'

export const getStaticPaths: GetStaticPaths = async () => {
  const rawResponse = await fetch(url, {
    ...init, body: JSON.stringify({ query: queryAllPokemonsNames })
  })
  const { data } = await rawResponse.json()
  const paths = data?.pokemon_v2_pokemon?.map(
    (path: any) => {
      return { params: { name: path.name } }
    }) ?? []

  return { paths, fallback: 'blocking' }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const name = context.params?.name

  const rawResponse = await fetch(url, {
    ...init,
    body: JSON.stringify({
      query: queryPokemonDetails,
      variables: { name }
    })
  })

  const { data } = await rawResponse.json()
  return {
    props: {
      data
    },
    revalidate: 60
  }
}

const Detail: NextPage<{data:any}> = ({ data }) => {
  const pokemon = data?.pokemon_v2_pokemon?.length > 0 &&
    <PokemonProfile pokemon={
      new PokemonBuilder()
        .fromPokeApi(data?.pokemon_v2_pokemon[0])
        .build()
    }/>

  return (
    <Layout>
      <Head>
        <title>Pokemon Explorer - Pokemon Profile</title>
        <meta name="description" content="See your pokemon characteristics." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Section>
        {pokemon}
      </Section>
    </Layout>
  )
}

Detail.propTypes = {
  data: PropTypes.any
}

export default Detail
