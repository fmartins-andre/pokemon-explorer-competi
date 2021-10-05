import Session from '../../model/Session'
import sessionPersistenceLocalStorage from '../../model/sessionPersistenceLocalStorage'

export default class SessionController implements Session {
  username: string
  password: string

  private static instance: SessionController

  private constructor () {
    this.username = ''
    this.password = ''
  }

  public static getSessionController (): SessionController {
    if (!SessionController.instance) {
      SessionController.instance = new SessionController()
    }

    return SessionController.instance
  }

  public getSession (): Session | null {
    console.info('current session: ', this)
    return this.username ? this : null
  }

  public login (username: string, password: string): Session | null {
    const savedSession = sessionPersistenceLocalStorage().get(username)
    if (savedSession) {
      return savedSession.password === password ? savedSession : null
    }

    SessionController.instance.username = username
    SessionController.instance.password = password
    sessionPersistenceLocalStorage().set(this)

    console.log('this ', this)

    return this
  }

  public logout (): void {
    SessionController.instance.username = ''
    SessionController.instance.password = ''
  }
}
