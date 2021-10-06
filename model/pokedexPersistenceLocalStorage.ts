import { SessionDto } from './Session'

export default function pokedexPersistenceLocalStorage () {
  function list (session: SessionDto|null): string[]|null {
    if (!session) return null

    const rawPokedex = window.localStorage.getItem(getPokedexAddress(session.username))
    return rawPokedex ? JSON.parse(rawPokedex) : []
  }

  function add (session: SessionDto|null, pokemonsNames: string[]):string[]|null {
    if (!session) return null

    const pokedex = list(session)

    const newPokedex = Array.from(new Set([...pokedex ?? [], ...pokemonsNames]))
    window.localStorage.setItem(
      getPokedexAddress(session.username),
      JSON.stringify(newPokedex)
    )

    return newPokedex
  }

  function remove (session: SessionDto|null, pokemonsNames: string[]):string[]|null {
    if (!session) return null

    const pokedex = list(session)
    const newPokedex = pokedex?.filter(pokemon => !pokemonsNames.includes(pokemon))

    if (!newPokedex) return []

    window.localStorage.setItem(
      getPokedexAddress(session.username),
      JSON.stringify(newPokedex)
    )

    return newPokedex
  }

  function getPokedexAddress (username: string) {
    return `pokedex_${username}`
  }

  return { list, add, remove }
}
