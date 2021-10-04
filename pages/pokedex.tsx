import type { NextPage } from 'next'
import Head from 'next/head'
import Layout from '../components/layout'
import Section from '../components/section'
import { PokedexWrapper, PokedexItem } from '../components/pokedex'

const Pokedex: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Pokemon Explorer - Trainer Pokedex</title>
        <meta name="description" content="See your pokemons." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Section>
        <PokedexWrapper>
          <PokedexItem />
          <PokedexItem />
          <PokedexItem />
          <PokedexItem />
          <PokedexItem />
          <PokedexItem />
        </PokedexWrapper>
      </Section>
    </Layout>
  )
}

export default Pokedex
