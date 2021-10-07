import type { NextPage, GetStaticPaths, GetStaticProps } from 'next'
import PropTypes from 'prop-types'
import Head from 'next/head'
import Layout from '../../components/layout'
import Section from '../../components/section'
import PokemonProfile from '../../components/pokemonProfile'
import { PokemonBuilder } from '../../model/PokemonBuilder'
import getDetailPageStaticPaths from '../../controller/detail/getDetailPageStaticPaths'
import getDetailPageStaticProps from '../../controller/detail/getDetailPageStaticProps'

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getDetailPageStaticPaths()
  return { paths, fallback: 'blocking' }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const data = await getDetailPageStaticProps(context)
  return { props: { data } }
}

const Detail: NextPage<{data:any}> = ({ data }) => {
  const pokemon = data && new PokemonBuilder()
    .fromPokeApi(data)
    .build()

  return (
    <Layout>
      <Head>
        <title>Pokemon Explorer - { pokemon?.name ?? 'Pokemon Profile'}</title>
        <meta name="description" content="See your pokemon characteristics." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Section>
        {data && <PokemonProfile pokemon={pokemon}/> }
      </Section>
    </Layout>
  )
}

Detail.propTypes = {
  data: PropTypes.any
}

export default Detail
