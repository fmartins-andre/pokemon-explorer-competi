import type { NextPage } from 'next'
import Head from 'next/head'
import Layout from '../../components/layout'
import Section from '../../components/section'
import PokemonProfile from '../../components/pokemonProfile'

const Detail: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Pokemon Explorer - Pokemon Profile</title>
        <meta name="description" content="See your pokemon characteristics." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Section>
        <PokemonProfile />
      </Section>
    </Layout>
  )
}

export default Detail
