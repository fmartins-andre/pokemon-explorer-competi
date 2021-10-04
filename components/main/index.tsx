import { FunctionComponent } from 'react'
import styles from './Main.module.css'

const Main: FunctionComponent = ({ children }) => {
  return (
    <main className={styles.main}>
      <section className={styles.section}>
        {children}
      </section>
    </main>
  )
}

export default Main
