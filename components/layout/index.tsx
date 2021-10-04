import { FunctionComponent } from 'react'
import Header from '../header'
import Main from '../main'
import Footer from '../footer'
import styles from './Layout.module.css'

const Layout: FunctionComponent = props => {
  return (
    <div className={styles.container}>
      <Header />
      <Main>
        {props.children}
      </Main>
      <Footer/>
    </div>
  )
}

export default Layout
