import type { FunctionComponent, AnchorHTMLAttributes } from 'react'
import clsx from 'clsx'
import styles from './Button.module.css'

const BaseButtonAnchor: FunctionComponent<AnchorHTMLAttributes<HTMLAnchorElement>> = props => {
  return (
    <a {...props} className={clsx(styles.baseButton, styles.baseButtonAnchor)}>
      {props.children}
    </a>
  )
}

export default BaseButtonAnchor
