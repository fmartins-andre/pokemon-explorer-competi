import type { Key } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Layout from '../components/layout'
import Section from '../components/section'
import { Card, CardWrapper } from '../components/card'
import SimpleSlider from '../components/slider'
import { useQuery } from '@apollo/client'
import { PokemonBuilder } from '../model/PokemonBuilder'

import { queryPokemonsList } from '../service/queryPokemonsList'

const QUERY_VARS = {
  limit: 6,
  offset: 0
}

const Home: NextPage = () => {
  const { data } = useQuery(queryPokemonsList, { variables: QUERY_VARS })

  const pokemonList = data?.pokemon_v2_pokemon?.map(
    (item: any, index: Key) =>
      <Card key={index} data={new PokemonBuilder().fromPokeApi(item).build()} />
  )

  return (
    <Layout>
      <Head>
        <title>Pokemon Explorer</title>
        <meta name="description" content="A tool for Pokemon trainers" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Section>
        <CardWrapper>
          {pokemonList}
        </CardWrapper>
      </Section>
      <SimpleSlider>
        {pokemonList}
      </SimpleSlider>
    </Layout>
  )
}

export default Home
