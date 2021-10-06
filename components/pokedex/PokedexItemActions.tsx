import { FunctionComponent, MouseEventHandler } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import pokedexController from '../../controller/pokedex/pokedexController'

import viewIcon from '../../public/view_icon.svg'
import trashIcon from '../../public/trash_icon.svg'

const PokedexItemActions: FunctionComponent<{name: string}> = props => {
  const { name } = props

  const onClickRemove: MouseEventHandler = (event) => {
    event.preventDefault()
    pokedexController().remove([name])
    console.info(`Removed ${name} from Pokedex`)
  }

  return (
    <>
    <style jsx>{`
      .actions a:active {
        filter: brightness(0.75);
      }
    `}</style>
    <span className="actions">
      <Link href={`/detail/${name}` }>
        <a>
          <Image
            src={viewIcon}
            alt="Pokemon Character"
            objectFit={'contain'}
            objectPosition={'50% 50%'}
            height={36}
          />
        </a>
      </Link>
      <a onClick={onClickRemove}>
        <Image
          src={trashIcon}
          alt="Pokemon Character"
          objectFit={'contain'}
          objectPosition={'50% 50%'}
          height={36}
        />
      </a>
    </span>
    </>
  )
}

export default PokedexItemActions
