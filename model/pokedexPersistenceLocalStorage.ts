import Session from './Session'
import sessionPersistenceLocalStorage from './sessionPersistenceLocalStorage'

export default function pokedexPersistenceLocalStorage () {
  function list (username: string): string[] {
    const savedSession = sessionPersistenceLocalStorage().get(username)
    return savedSession?.pokedex ?? []
  }

  function add (session: Session, pokemonsNames: string[]) {
    const pokedex = Array.from(new Set(Array.prototype.concat(session.pokedex ?? [], pokemonsNames)))
    const updatedSession: Session = { ...session, pokedex }
    sessionPersistenceLocalStorage().set(updatedSession)
  }

  function remove (session: Session, pokemonsNames: string[]) {
    const pokedex = session.pokedex?.filter(pokemon => !pokemonsNames.includes(pokemon))
    const updatedSession = { ...session, pokedex }
    sessionPersistenceLocalStorage().set(updatedSession)
  }

  return { list, add, remove }
}
