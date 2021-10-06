import { FunctionComponent, FormEventHandler, useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import type { SessionDto } from '../../model/Session'
import BaseInput from '../input/BaseInput'
import BaseButton from '../button/BaseButton'
import SessionController from '../../controller/session/SessionController'

import styles from './LoginForm.module.css'

const LoginForm: FunctionComponent = props => {
  const [session, setSession] = useState<SessionDto|null>(null)
  const [loginError, setLoginError] = useState<boolean>(false)
  const router = useRouter()

  useEffect(() => {
    if (!session?.username) {
      const currentSession = SessionController
        .getSessionController()
        .getSession()

      setSession(currentSession)
    }
  }, [session, setSession])

  const onSubmit: FormEventHandler = (event: any) => {
    event.preventDefault()

    const { username, password } = event.target

    const session = SessionController
      .getSessionController()
      .login(username.value, password.value)

    setSession(session)
    setLoginError(!session)

    if (session) {
      router.back()
    }

    console.log('login button: ', session)
  }

  const onLogoutClick = () => {
    SessionController
      .getSessionController()
      .logout()

    setSession(null)
  }

  return session?.username
    ? (
        <div className={styles.container}>
          <div>
            <h1>Hi, {session.username}.</h1>
          </div>
          <div>
            <a onClick={onLogoutClick}>
              <BaseButton type="submit">Logout</BaseButton>
            </a>
          </div>
        </div>
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
          {loginError &&
            <div className={styles.error}>
              <span>Wrong password!</span>
            </div>
          }
        </form>
      )
}

export default LoginForm
