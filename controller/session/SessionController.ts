import Session, { SessionDto } from '../../model/Session'
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

  public getSession (): SessionDto|null {
    const currentSession = typeof window !== 'undefined'
      ? sessionPersistenceLocalStorage().get()
      : null

    if (currentSession) {
      SessionController.instance.username = currentSession.username
    }

    console.info('Current session: ', currentSession)
    return currentSession
  }

  public login (username: string, password: string): SessionDto | null {
    const userSessionData = sessionPersistenceLocalStorage().find({ username, password })

    if (!userSessionData) {
      SessionController.instance.username = username
      SessionController.instance.password = password
      const newSession = sessionPersistenceLocalStorage().set(this)
      if (newSession) console.info('Created a new user profile for ', newSession?.username)

      return newSession
    }

    return userSessionData.password === password
      ? sessionPersistenceLocalStorage().set(userSessionData)
      : null
  }

  public logout (): void {
    SessionController.instance.username = ''
    SessionController.instance.password = ''
    sessionPersistenceLocalStorage().set()
  }
}
