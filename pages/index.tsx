import { Key, useState, useEffect, ChangeEventHandler } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Layout from '../components/layout'
import Section from '../components/section'
import { Card, CardWrapper } from '../components/card'
import SimpleSlider from '../components/slider'
import { PokemonBuilder } from '../model/PokemonBuilder'
import PokemonFilter from '../components/filter/PokemonFilter'

import { DocumentNode } from '@apollo/client'
import client from '../service/apolloCliente'

import queriesStore, { QueryStoreReducerState } from '../redux/'

const createPokemonCardList = (data : any) => {
  const createCardList = (item: any, index: Key) => {
    const pokemon = new PokemonBuilder().fromPokeApi(item).build()
    return <Card key={index} data={pokemon} />
  }

  return data?.pokemon_v2_pokemon?.map(createCardList)
}

const Home: NextPage = () => {
  const [pokemonsCards, setPokemonsCards] = useState(null)
  const [query, setQuery] = useState<QueryStoreReducerState>(queriesStore.getState())

  queriesStore.subscribe(() => {
    setQuery(queriesStore.getState())
  })

  useEffect(() => {
    async function callQuery (query: DocumentNode, queryVars :any) {
      const result = await client.query({
        query: query,
        variables: queryVars
      })

      setPokemonsCards(createPokemonCardList(result.data))
    }

    if (query?.query) {
      callQuery(query.query, query.variables)
    }
  }, [query])

  const onChangeFilter: ChangeEventHandler<HTMLSelectElement> = (event) => {
    event.preventDefault()
    queriesStore.dispatch({
      type: 'SET_POKEMON_TYPE',
      filter: { type: event.currentTarget.value }
    })
  }

  return (
    <Layout>
      <Head>
        <title>Pokemon Explorer</title>
        <meta name="description" content="A tool for Pokemon trainers" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Section>
        <PokemonFilter types={['fire', 'water', 'earth', 'wind']} onChangeFilter={onChangeFilter}/>
        <CardWrapper>
          {pokemonsCards}
        </CardWrapper>
      </Section>
      <SimpleSlider>
        {pokemonsCards}
      </SimpleSlider>
    </Layout>
  )
}

export default Home
