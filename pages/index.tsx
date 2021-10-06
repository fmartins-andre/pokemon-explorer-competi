import { Key, useState, useEffect } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Layout from '../components/layout'
import Section from '../components/section'
import { Card, CardWrapper } from '../components/card'
import SimpleSlider from '../components/slider'
import { PokemonBuilder } from '../model/PokemonBuilder'

import client from '../service/apolloCliente'
import prepareQuery from '../utils/gqlQueryPreparation'
import { queryPokemonsList, config } from '../service/queryPokemonsList'

const QUERY_VARS = {
  limit: 6,
  offset: 0
}

const createPokemonCardList = (data : any) => {
  const createCardList = (item: any, index: Key) => {
    const pokemon = new PokemonBuilder().fromPokeApi(item).build()
    return <Card key={index} data={pokemon} />
  }

  return data?.pokemon_v2_pokemon?.map(createCardList)
}

const Home: NextPage = () => {
  const [pokemons, setPokemons] = useState(null)

  useEffect(() => {
    const myQuery = prepareQuery(queryPokemonsList, config.listAll)

    client.query({
      query: myQuery,
      variables: QUERY_VARS
    }).then((result) => {
      setPokemons(createPokemonCardList(result.data))
    }).catch((err) => {
      console.error('Error trying to get data form PokeApi: ', err)
    })
  }, [])

  return (
    <Layout>
      <Head>
        <title>Pokemon Explorer</title>
        <meta name="description" content="A tool for Pokemon trainers" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Section>
        <CardWrapper>
          {pokemons}
        </CardWrapper>
      </Section>
      <SimpleSlider>
        {pokemons}
      </SimpleSlider>
    </Layout>
  )
}

export default Home
