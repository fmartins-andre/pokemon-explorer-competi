import Session from './Session'

export default function sessionPersistenceLocalStorage () {
  function get (username: string): Session | null {
    if (!username) return null

    const savedSession = window.localStorage.getItem(username)
    return savedSession ? JSON.parse(savedSession) : null
  }

  function set (session: Session) {
    if (!session) return

    console.log('saving session: ', session)

    window.localStorage.setItem(
      session.username,
      JSON.stringify(session)
    )
  }

  return { get, set }
}
