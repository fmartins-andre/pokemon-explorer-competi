import { gql } from '@apollo/client'

export const queryPokemonsList = gql`
query pokemonsList($limit: Int, $offset: Int) {
  pokemon_v2_pokemon(limit: $limit, offset: $offset) {
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
  pokemon_v2_pokemon_aggregate(limit: $limit, offset: $offset) {
    aggregate {
      count
    }
  }
}`
