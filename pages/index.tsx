import type { Key } from 'react'
import type { NextPage } from 'next'
import type IPokemonListItem from '../types/IPokemonListItem'
import Head from 'next/head'
import Layout from '../components/layout'
import Section from '../components/section'
import { Card, CardWrapper } from '../components/card'
import SimpleSlider from '../components/slider'
import { useQuery, gql } from '@apollo/client'

const LIST_POKEMONS = gql`query pokemons($limit: Int, $offset: Int) {
  pokemons(limit: $limit, offset: $offset) {
    count
    next
    previous
    status
    message
    results {
      id
      url
      name
      image
    }
  }
}`

const QUERY_VARS = {
  limit: 6,
  offset: 0
}

const Home: NextPage = () => {
  const { data } = useQuery(LIST_POKEMONS, { variables: QUERY_VARS })

  console.log(data)

  return (
    <Layout>
      <Head>
        <title>Pokemon Explorer</title>
        <meta name="description" content="A tool for Pokemon trainers" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Section>
        <CardWrapper>
          { data?.pokemons?.count > 0 &&
            data.pokemons.results.map(
              (pokemon: IPokemonListItem, index: Key) => (
                <Card key={index} data={pokemon} />
              ))
          }
        </CardWrapper>
      </Section>
      <SimpleSlider>
        { data?.pokemons?.count > 0 &&
            data.pokemons.results.map(
              (pokemon: IPokemonListItem, index: Key) => (
                <Card key={index} data={pokemon} />
              ))
          }
      </SimpleSlider>
    </Layout>
  )
}

export default Home
