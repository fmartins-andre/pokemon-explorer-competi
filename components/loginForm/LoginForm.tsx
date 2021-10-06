import { FunctionComponent, FormEventHandler, useState } from 'react'
import type Session from '../../model/Session'
import BaseInput from '../input/BaseInput'
import BaseButton from '../button/BaseButton'
import SessionController from '../../controller/session/SessionController'

import styles from './LoginForm.module.css'

const LoginForm: FunctionComponent = props => {
  const [session, setSession] = useState<Session|null>(null)

  const onSubmit: FormEventHandler = (event: any) => {
    event.preventDefault()

    const { username, password } = event.target

    const session = SessionController
      .getSessionController()
      .login(username.value, password.value)

    setSession(session)
  }

  return session
    ? (
        <p>Hi, {session.username}.</p>
      )
    : (
        <form onSubmit={onSubmit} className={styles.container}>
          <div>
            <h1>Login</h1>
            <p>Login to your pokedex or create one </p>
          </div>
          <div>
            <BaseInput type="text" name="username" placeholder="username" required/>
          </div>
          <div>
            <BaseInput type="password" name="password" placeholder="password" required/>
          </div>
          <div>
            <BaseButton type="submit">Login</BaseButton>
          </div>
        </form>
      )
}

export default LoginForm
