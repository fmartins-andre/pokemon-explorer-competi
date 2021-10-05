export const queryAllPokemonsNames = `query pokemonsNames {
  pokemon_v2_pokemon(limit: 50, offset: 0) {
    name
  }
}`
