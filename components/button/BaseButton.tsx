import type { FunctionComponent, ButtonHTMLAttributes } from 'react'
import styles from './Button.module.css'

const BaseButton: FunctionComponent<ButtonHTMLAttributes<HTMLButtonElement>> = props => {
  return (
    <button className={styles.baseButton}>
      {props.children}
    </button>
  )
}

export default BaseButton
