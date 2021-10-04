import { FunctionComponent } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { BaseButton } from '../button'

import styles from './PokemonProfile.module.css'

import pokemon from '../../public/pikachu.png'

const PokemonProfile: FunctionComponent = props => {
  return (
    <div className={styles.container}>
      <aside className={styles.name}>
        <h1>Pikachu</h1>
      </aside>
      <aside className={styles.picture}>
        <Image
          src={pokemon}
          alt="Pokemon Character"
          objectFit={'cover'}
          objectPosition={'50% 50%'}
        />
      </aside>
      <article className={styles.data}>
        <div>
          <p>Name: Pikachu</p>
          <p>Type: Electric</p>
          <p>Color: Yellow</p>
          <p>Age: Old</p>
          <p>Location: Ash&apos;s balls</p>
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
