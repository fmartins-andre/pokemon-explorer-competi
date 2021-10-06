export const queryPokemonsList = `
query pokemonsList(#declarations#) {
  pokemon_v2_pokemon(#filters#) {
    id
    name
    base_experience
    height
    weight
    pokemon_v2_pokemontypes {
      pokemon_v2_type {
        name
      }
    }
  }
  pokemon_v2_pokemon_aggregate(#filters#) {
    aggregate {
      count
    }
  }
}`

export const config = {
  listAll: {
    declarations: '$limit: Int, $offset: Int',
    filters: 'limit: $limit, offset: $offset'
  }
}
