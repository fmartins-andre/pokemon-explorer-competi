interface PokemonStats {
  name: string
  value: number
}

export default interface Pokemon {
  id: number
  name: string
  baseExperience: number
  types: string[]
  image: string
  height?: number
  weight?: number
  stats?: PokemonStats[]
  abilities?: string[]
}
