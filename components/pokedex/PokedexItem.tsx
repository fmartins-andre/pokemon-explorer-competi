import { FunctionComponent } from 'react'
import Pokemon from '../../model/Pokemon'
import Image from 'next/image'
import PokedexItemActions from './PokedexItemActions'

import styles from './PokedexItem.module.css'

const PokedexItem: FunctionComponent<{pokemon: Pokemon}> = props => {
  const { pokemon } = props

  return (
    <li className={styles.item}>
      <span className={styles.picture}>
        <Image
          src={pokemon.image}
          alt={pokemon.name}
          objectFit={'cover'}
          objectPosition={'50% 50%'}
          height={200}
          width={200}
        />
      </span>
      <span className={styles.name}>{pokemon.name}</span>
      <span className={styles.type}>{pokemon.types.join(', ')}</span>
      <PokedexItemActions name={pokemon.name} />
    </li>
  )
}

export default PokedexItem
