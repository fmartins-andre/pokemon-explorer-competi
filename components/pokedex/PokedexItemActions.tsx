import { FunctionComponent } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import viewIcon from '../../public/view_icon.svg'
import trashIcon from '../../public/trash_icon.svg'

const PokedexItemActions: FunctionComponent = props => {
  return (
    <>
    <style jsx>{`
      .actions a:active {
        filter: brightness(0.75);
      }
    `}</style>
    <span className="actions">
      <Link href="/detail">
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
      <a href="#">
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
