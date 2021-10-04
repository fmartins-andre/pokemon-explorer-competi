import { FunctionComponent, InputHTMLAttributes } from 'react'
import styles from './BaseInput.module.css'

const BaseInput: FunctionComponent<InputHTMLAttributes<HTMLInputElement>> = props => {
  return (
    <input {...props} className={styles.baseInput} />
  )
}

export default BaseInput
