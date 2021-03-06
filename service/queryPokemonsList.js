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
  pokemon_v2_pokemon_aggregate(#count#) {
    aggregate {
      count
    }
  }
}`

export const config = {
  listAll: {
    declarations: '$limit: Int, $offset: Int',
    filters: 'limit: $limit, offset: $offset, where: {is_default: {_eq: true}}',
    count: 'where: {is_default: {_eq: true}}'
  },
  filterByType: {
    declarations: '$limit: Int, $offset: Int, $type: String',
    filters: 'limit: $limit, offset: $offset, where: {pokemon_v2_pokemontypes: {pokemon_v2_type: {name: {_eq: $type}}}, is_default: {_eq: true}}',
    count: 'where: {pokemon_v2_pokemontypes: {pokemon_v2_type: {name: {_eq: $type}}}, is_default: {_eq: true}}'
  },
  filterByName: {
    declarations: '$limit: Int, $offset: Int, $name: String',
    filters: 'limit: $limit, offset: $offset, where: {is_default: {_eq: true}, name: {_ilike: $name}}, order_by: {name: asc}',
    count: 'where: {is_default: {_eq: true}, name: {_ilike: $name}}, order_by: {name: asc}'
  },
  carrousel: {
    declarations: '$limit: Int',
    filters: 'limit: 30, where: {is_default: {_eq: true}}, order_by: {base_experience: desc, height: asc}',
    count: 'limit: 30, where: {is_default: {_eq: true}}, order_by: {base_experience: desc, height: asc}'
  }
}
