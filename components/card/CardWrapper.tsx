import { FunctionComponent } from 'react'
import styles from './CardWrapper.module.css'

const CardWrapper: FunctionComponent = ({ children }) => {
  return (
    <div className={styles.cardWrapper}>
      {children}
    </div>
  )
}

export default CardWrapper
