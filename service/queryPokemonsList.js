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
    filters: 'limit: $limit, offset: $offset, where: {is_default: {_eq: true}}'
  },
  filterByType: {
    declarations: '$limit: Int, $offset: Int, $type_eq: String',
    filters: 'limit: $limit, offset: $offset, where: {pokemon_v2_pokemontypes: {pokemon_v2_type: {name: {_eq: $type_eq}}}, is_default: {_eq: true}}'
  },
  filterByName: {
    declarations: '$limit: Int, $offset: Int, $name: String, $_ilike: String',
    filters: 'limit: $limit, offset: $offset, where: {is_default: {_eq: true}, name: {_ilike: $_ilike}}, order_by: {name: asc}'
  }
}
