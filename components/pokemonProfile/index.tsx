import { FunctionComponent } from 'react'
import type Pokemon from '../../model/Pokemon'
import Image from 'next/image'
import Link from 'next/link'
import { BaseButton } from '../button'
import capitalizeString from '../../utils/capitalizeString'

import styles from './PokemonProfile.module.css'

const PokemonProfile: FunctionComponent<{pokemon: Pokemon}> = ({ pokemon }) => {
  return (
    <div className={styles.container}>
      <aside className={styles.name}>
        <h1>{capitalizeString(pokemon.name)}</h1>
      </aside>
      <aside className={styles.picture}>
        <Image
          src={pokemon.image}
          alt={pokemon.name}
          objectFit={'cover'}
          objectPosition={'50% 50%'}
          width={300}
          height={300}
        />
      </aside>
      <article className={styles.data}>
        <div>
          <p>types: {pokemon.types.join(', ')}</p>
          <p>base experience: {pokemon.baseExperience}</p>
          {pokemon?.height && <p>height: {pokemon.height} </p>}
          {pokemon?.weight && <p>weight: {pokemon.weight} </p>}
          {pokemon?.stats && pokemon.stats.map(
            (stat, index) => <p key={index}>{stat.name}: {stat.value}</p>
          )}
          {pokemon?.abilities && <p>abilities: {pokemon.abilities.join(', ')} </p>}
        </div>
      </article>
      <aside className={styles.action}>
        <Link href="/"><a>Voltar</a></Link>
        <BaseButton>Adicionar</BaseButton>
      </aside>
    </div>
  )
}

export default PokemonProfile
