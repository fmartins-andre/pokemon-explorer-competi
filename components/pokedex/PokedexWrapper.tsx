import { FunctionComponent } from 'react'
import styles from './PokedexWrapper.module.css'

const PokedexWrapper: FunctionComponent = props => {
  return (
    <ol className={styles.wrapper}>
      {props.children}
    </ol>
  )
}

export default PokedexWrapper
