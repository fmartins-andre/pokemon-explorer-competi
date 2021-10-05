
import { FunctionComponent } from 'react'
import Image from 'next/image'
import clsx from 'clsx'
import Link from 'next/link'
import { BaseInput } from '../input'
import { BaseButton } from '../button'

import styles from './Header.module.css'

import pokemonLogo from '../../public/pokemon_logo.svg'
import sponsorLogo from '../../public/competi_logo.svg'

const Header: FunctionComponent = props => {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <Link href="/">
          <a>
            <div className={clsx(styles.box, styles.logo)}>
              <Image
                src={pokemonLogo}
                alt="Pokemon Logo"
                objectFit={'contain'}
                objectPosition={'50% 50%'}
                width={150}
                height={55}
              />
            </div>
          </a>
        </Link>

        <div className={clsx(styles.box, styles.searchBar)}>
          <BaseInput type="text" placeholder="Search Pokémon" />
        </div>

        <div className={clsx(styles.box, styles.session)}>
          <BaseButton>Login</BaseButton>
        </div>

        <div className={clsx(styles.box, styles.sponsor)}>
          <Image
            src={sponsorLogo}
            alt="Competi Logo"
            objectFit={'contain'}
            objectPosition={'50% 50%'}
            width={150}
            height={38}
          />
        </div>
      </div>
    </header>
  )
}

export default Header
