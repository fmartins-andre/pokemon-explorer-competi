import { FunctionComponent } from 'react'
import BaseButton from './BaseButton'
import BaseButtonAnchor from './BaseButtonAnchor'

const Button: FunctionComponent<{component?:string|undefined}> = props => {
  const { component, children, ...other } = props

  const Component = (props?.component === 'a')
    ? BaseButtonAnchor
    : BaseButton

  return (
    <Component {...other}>
      {children}
    </Component>
  )
}

export default Button
