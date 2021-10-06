import { gql } from '@apollo/client'

export const queryPokedex = gql`
query pokedex($limit: Int, $offset: Int, $in: [String!]) {
  pokemon_v2_pokemon(limit: $limit, offset: $offset, where: {name: {_in: $in}}) {
    id
    name
    base_experience
    pokemon_v2_pokemontypes {
      pokemon_v2_type {
        name
      }
    }
  }
  pokemon_v2_pokemon_aggregate(limit: $limit, offset: $offset, where: {name: {_in: $in}}) {
    aggregate {
      count
    }
  }
}
`
