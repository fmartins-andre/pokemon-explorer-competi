import { FunctionComponent } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'
import AddPokemon from '../addToPokedex/AddPokemon'

import addIcon from '../../public/add_icon.svg'
import viewIcon from '../../public/view_icon.svg'

const CardActions: FunctionComponent<{className?: string, name: string}> = props => {
  const classes = props?.className

  return (
    <>
      <style jsx>{`
        .cardActions {
          border: 0;
          width: 110px;
          height: 50px;
          position: absolute;
          top: calc(50% - 25px);
          left: calc(50% - 55px);
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .cardActions a:active {
          filter: brightness(0.75);
        }
      `}</style>
      <div className={clsx('cardActions', classes)}>
        <div>
          <Link href={{
            pathname: '/detail/[name]',
            query: { name: props.name }
          }}>
          <a>
            <Image
              src={viewIcon}
              alt="View Pokemon Details"
              objectFit={'contain'}
              objectPosition={'50% 50%'}
            />
          </a>
          </Link>
        </div>
        <div>
          <AddPokemon name={props.name}>
            <Image
              src={addIcon}
              alt="Add Pokemon to your Pokedex"
              objectFit={'contain'}
              objectPosition={'50% 50%'}
            />
          </AddPokemon>
        </div>
      </div>
    </>
  )
}

export default CardActions
