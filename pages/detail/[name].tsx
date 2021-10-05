import type { NextPage } from 'next'
import Head from 'next/head'
import Layout from '../../components/layout'
import Section from '../../components/section'
import PokemonProfile from '../../components/pokemonProfile'
import { useQuery } from '@apollo/client'

const Detail: NextPage = () => {
  // const { data } = useQuery()
  return (
    <Layout>
      <Head>
        <title>Pokemon Explorer - Pokemon Profile</title>
        <meta name="description" content="See your pokemon characteristics." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Section>
        <PokemonProfile data={data}/>
      </Section>
    </Layout>
  )
}

export default Detail
