import { FunctionComponent } from 'react'
import styles from './Section.module.css'

const Section: FunctionComponent = ({ children }) => {
  return (
    <div className={styles.container}>
      <section className={styles.section}>
        {children}
      </section>
    </div>
  )
}

export default Section
