import SessionController from '../session/SessionController'
import pokedexPersistenceLocalStorage from '../../model/pokedexPersistenceLocalStorage'

export default function pokedexController () {
  const session = SessionController.getSessionController().getSession()

  function list () {
    return pokedexPersistenceLocalStorage().list(session)
  }

  function add (pokemonsNames: string[]): string[]|null {
    if (session) {
      return pokedexPersistenceLocalStorage().add(session, pokemonsNames)
    }

    return null
  }

  function remove (pokemonsNames: string[]) {
    if (session) {
      pokedexPersistenceLocalStorage().remove(session, pokemonsNames)
      return true
    }

    return false
  }

  return { list, add, remove }
}
