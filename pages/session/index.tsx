import { NextPage } from 'next'
import Head from 'next/head'
import Layout from '../../components/layout'
import Section from '../../components/section'
import LoginForm from '../../components/loginForm/LoginForm'

const Session: NextPage = () => {
  return (
    <Layout>
    <Head>
      <title>Pokemon Explorer - Session</title>
      <meta name="description" content="Login to access your Pokemon collection" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Section>
      <LoginForm />
    </Section>
  </Layout>
  )
}

export default Session
