import { Key, useState, useEffect, ChangeEventHandler } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Layout from '../components/layout'
import Section from '../components/section'
import { Card, CardWrapper } from '../components/card'
import SimpleSlider from '../components/slider'
import { PokemonBuilder } from '../model/PokemonBuilder'
import PokemonFilter from '../components/filter/PokemonFilter'
import Pagination from '../components/pagination'

import { DocumentNode } from '@apollo/client'
import client from '../service/apolloCliente'

import queriesStore, { QueryStoreReducerState } from '../redux/'
import { queryPokemonsList, config as queryConfig } from '../service/queryPokemonsList'
import prepareQuery from '../utils/gqlQueryPreparation'

const createPokemonCardList = (data : any) => {
  const createCardList = (item: any, index: Key) => {
    const pokemon = new PokemonBuilder().fromPokeApi(item).build()
    return <Card key={index} data={pokemon} />
  }

  return data?.pokemon_v2_pokemon?.map(createCardList)
}

const Home: NextPage = () => {
  const [pokemonsCards, setPokemonsCards] = useState(null)
  const [carrouselCards, setCarrouselCards] = useState(null)
  const [query, setQuery] = useState<QueryStoreReducerState>(queriesStore.getState())
  const [pageCount, setPageCount] = useState<number>(0)

  queriesStore.subscribe(() => {
    setQuery(queriesStore.getState())
  })

  useEffect(() => {
    async function callQuery (query: DocumentNode, queryVars :any) {
      try {
        const result = await client.query({
          query: query,
          variables: queryVars
        })

        setCarrouselCards(createPokemonCardList(result.data))
      } catch (error) {
        console.error('Error getting data from API: ', error)
      }
    }

    const carrouselQuery = prepareQuery(queryPokemonsList, queryConfig.carrousel)
    callQuery(carrouselQuery, { variables: {} })
  }, [])

  useEffect(() => {
    async function callQuery (query: DocumentNode, queryVars :any) {
      try {
        const result = await client.query({
          query: query,
          variables: queryVars
        })

        setPokemonsCards(createPokemonCardList(result.data))

        const itemsCount = result.data.pokemon_v2_pokemon_aggregate.aggregate.count ?? 0
        setPageCount(Math.ceil(itemsCount / 6))
      } catch (error) {
        console.error('Error getting data from API: ', error)
      }
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

  const handlePageClick = (data: any) => {
    console.log(data)

    const itensPerPage = 6
    const selected = data.selected
    const offset = Math.ceil(selected * itensPerPage)

    queriesStore.dispatch({
      type: 'SET_OFFSET',
      filter: { offset }
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
        <PokemonFilter types={['bug', 'dark', 'dragon', 'electric', 'fairy', 'fighting', 'fire', 'flying', 'ghost', 'grass', 'ground', 'ice', 'normal', 'poison', 'psychic', 'rock', 'steel', 'water']} onChangeFilter={onChangeFilter}/>
        <CardWrapper>
          {pokemonsCards}
        </CardWrapper>
        <Pagination pageCount={pageCount} onPageChange={handlePageClick}/>
      </Section>
      <SimpleSlider>
        {carrouselCards}
      </SimpleSlider>
    </Layout>
  )
}

export default Home
