import Session from './Session'

export default function sessionPersistenceLocalStorage () {
  const storageName = 'pokedex'

  function getAll (): Session[] {
    const rawSavedSessions = window.localStorage.getItem(storageName)
    return rawSavedSessions
      ? JSON.parse(rawSavedSessions)
      : null
  }

  function get (username: string): Session | null {
    if (!username) return null

    const savedSessions = getAll()
    return savedSessions.find(session => session.username === username) ?? null
  }

  function set (session: Session) {
    if (!session) return

    const savedSessions = getAll()

    console.log('saving session: ', session)

    window.localStorage.setItem(
      storageName,
      JSON.stringify(Array.prototype.concat(savedSessions, session))
    )
  }

  return { get, set }
}
