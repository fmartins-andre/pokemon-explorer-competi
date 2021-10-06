import { Key, useEffect, useState } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useLazyQuery } from '@apollo/client'
import Layout from '../components/layout'
import Section from '../components/section'
import { PokedexWrapper, PokedexItem } from '../components/pokedex'
import { queryPokedex } from '../service/queryPokedex'
import { PokemonBuilder } from '../model/PokemonBuilder'
import pokedexController from '../controller/pokedex'

const QUERY_VARS = {
  limit: 20,
  offset: 0,
  in: []
}

const Pokedex: NextPage = () => {
  const [getPokedex, { data }] = useLazyQuery(queryPokedex)
  const [pokedex, setPokedex] = useState(null)

  useEffect(() => {
    const pokedex = pokedexController().list()
    getPokedex({ variables: { ...QUERY_VARS, in: pokedex } })

    setPokedex(createPokedex(data))
  }, [data])

  function createPokedex (data: any) {
    return data?.pokemon_v2_pokemon?.map((item: any, index: Key) => {
      const pokemon = new PokemonBuilder().fromPokeApi(item).build()

      return <PokedexItem key={index} pokemon={pokemon} />
    }
    )
  }

  return (
    <Layout>
      <Head>
        <title>Pokemon Explorer - Trainer Pokedex</title>
        <meta name="description" content="See your pokemons." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Section>
        <PokedexWrapper>
          {pokedex}
        </PokedexWrapper>
      </Section>
    </Layout>
  )
}

export default Pokedex
