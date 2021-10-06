import Session, { SessionDto } from './Session'

export default function sessionPersistenceLocalStorage () {
  const currentSessionAddress = 'pokedexSession'

  function getUserProfileAddress (username: string) {
    const pokedexSuffix = '_profile'
    return `${username}${pokedexSuffix}`
  }

  function get (): SessionDto|null {
    const rawSessionData = window.localStorage.getItem(currentSessionAddress)
    return rawSessionData
      ? JSON.parse(rawSessionData)
      : null
  }

  function find (credentials: Session): Session|null {
    const rawUserProfile = window.localStorage.getItem(getUserProfileAddress(credentials.username))
    return rawUserProfile
      ? JSON.parse(rawUserProfile)
      : null
  }

  function set (session?: Session): SessionDto|null {
    if (!session) {
      window.localStorage.removeItem(currentSessionAddress)
      return null
    }

    const userData = JSON.stringify(session)
    const sessionData = JSON.stringify({ username: session.username })

    // persist user profile data
    window.localStorage.setItem(getUserProfileAddress(session.username), userData)
    // save current session
    window.localStorage.setItem(currentSessionAddress, sessionData)

    console.info('Created session for ', session.username)

    return get()
  }

  return { get, find, set }
}
