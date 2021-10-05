import { FunctionComponent } from 'react'
import styles from './Card.module.css'
import Image from 'next/image'
import clsx from 'clsx'
import CardActions from './CardActions'
import type Pokemon from '../../model/Pokemon'
import capitalizeString from '../../utils/capitalizeString'

const Card:FunctionComponent<{data: Pokemon }> = ({ data }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardContent}>
        <div className={clsx(styles.cardCommons, styles.cardCover)}>
          <Image
            src={data.image}
            alt="Pokemon Character"
            layout={'fill'}
            objectFit={'cover'}
            objectPosition={'50% 50%'}
          />
        </div>
        <span className={clsx(styles.cardCommons, styles.cardLabel)}>
          {capitalizeString(data.name)}
        </span>
        <span className={clsx(styles.cardCommons, styles.cardType)}>{data.types[0]}</span>
        <div className={clsx(styles.cardCommons, styles.cardBaseExperience)}>
          <span>{data.baseExperience}</span>
        </div>
        <CardActions className={styles.cardActions} name={data.name}/>
      </div>
    </div>
  )
}

export default Card
