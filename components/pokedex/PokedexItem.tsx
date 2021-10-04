import { FunctionComponent } from 'react'
import Image from 'next/image'
import PokedexItemActions from './PokedexItemActions'

import styles from './PokedexItem.module.css'

import pokemon from '../../public/pikachu.png'

const PokedexItem: FunctionComponent = props => {
  return (
    <li className={styles.item}>
      <span className={styles.picture}>
        <Image
          src={pokemon}
          alt="Pokemon Character"
          objectFit={'contain'}
          objectPosition={'50% 50%'}
        />
      </span>
      <span className={styles.name}>Pikachu</span>
      <span className={styles.type}>Electric</span>
      <PokedexItemActions />
    </li>
  )
}

export default PokedexItem
