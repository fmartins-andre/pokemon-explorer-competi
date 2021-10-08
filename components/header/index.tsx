
import { FunctionComponent, KeyboardEventHandler, useEffect, useState } from 'react'
import { SessionDto } from '../../model/Session'
import Image from 'next/image'
import { useRouter } from 'next/router'
import clsx from 'clsx'
import Link from 'next/link'
import { BaseInput } from '../input'
import Button from '../button'
import SessionController from '../../controller/session/SessionController'
import queriesStore from '../../redux'

import styles from './Header.module.css'

import pokemonLogo from '../../public/pokemon_logo.svg'
import sponsorLogo from '../../public/competi_logo.svg'

const Header: FunctionComponent = props => {
  const [session, setSession] = useState<SessionDto|null>(null)
  const router = useRouter()

  useEffect(() => {
    if (!session) {
      setSession(
        SessionController.getSessionController().getSession()
      )
    }
  }, [session, setSession])

  const handleInitialState = () => {
    queriesStore.dispatch({ type: 'SET_DEFAULT', filter: {} })
  }

  const handleEnterKey: KeyboardEventHandler<HTMLInputElement> = (event) => {
    if (event.key === 'Enter') {
      queriesStore.dispatch({
        type: 'SET_POKEMON_NAME',
        filter: {
          name: event.currentTarget.value
        }
      })
      event.currentTarget.value = ''
      router.push('/')
    }
  }

  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <Link href="/">
          <a onClick={handleInitialState}>
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
          <BaseInput type="text" placeholder="Search Pokémon" onKeyPress={handleEnterKey}/>
        </div>

        <div className={clsx(styles.box, styles.session)}>
              <Link href='/session' passHref>
                {session
                  ? <a>{session.username}</a>
                  : <Button component='a'>Login</Button>
                }
              </Link>
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
