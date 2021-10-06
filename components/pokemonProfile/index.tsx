import { FunctionComponent, MouseEventHandler } from 'react'
import { useRouter } from 'next/router'
import type Pokemon from '../../model/Pokemon'
import Image from 'next/image'
import AddPokemon from '../addToPokedex/AddPokemon'
import BaseButton from '../button/BaseButton'
import capitalizeString from '../../utils/capitalizeString'

import styles from './PokemonProfile.module.css'

const PokemonProfile: FunctionComponent<{pokemon: Pokemon}> = ({ pokemon }) => {
  const router = useRouter()

  const onClickBack: MouseEventHandler = (event) => {
    event.preventDefault()
    router.back()
  }

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
        <a onClick={onClickBack}>go back</a>
        <AddPokemon name={pokemon.name}>
          <BaseButton>Add to Pokedex</BaseButton>
        </AddPokemon>
      </aside>
    </div>
  )
}

export default PokemonProfile
