import Pokemon from './Pokemon'

export class PokemonBuilder {
  private readonly pokemon: Pokemon
  private readonly imageBaseUrl: string

  constructor () {
    this.pokemon = {
      id: 0,
      name: '',
      baseExperience: 0,
      types: [],
      image: ''
    }
    this.imageBaseUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/65a610e336f749665c6206f9b733363ca438e54c/sprites/pokemon/@.png'
  }

  private imageUrlMaker (id:number) {
    return this.imageBaseUrl.replace('@', `${id}`)
  }

  id (id: number) {
    this.pokemon.id = id
    this.pokemon.image = this.imageUrlMaker(id)
    return this
  }

  name (name: string) {
    this.pokemon.name = name
    return this
  }

  baseExperience (baseExperience: number) {
    this.pokemon.baseExperience = baseExperience
    return this
  }

  types (types: string[]) {
    this.pokemon.types = types
    return this
  }

  image (image: string) {
    this.pokemon.image = image
    return this
  }

  fromPokeApi (data: any) {
    this.pokemon.id = data.id
    this.pokemon.image = this.imageUrlMaker(data.id)
    this.pokemon.name = data.name
    this.pokemon.baseExperience = data.base_experience
    this.pokemon.height = data?.height
    this.pokemon.weight = data?.weight
    this.pokemon.types = data?.pokemon_v2_pokemontypes?.map(
      (type: any) => type.pokemon_v2_type.name)
    this.pokemon.abilities = data?.pokemon_v2_pokemonabilities?.map(
      (type: any) => type.pokemon_v2_ability.name)
    this.pokemon.stats = data?.pokemon_v2_pokemonstats?.map(
      (type: any) => ({
        name: type.pokemon_v2_stat.name,
        value: type.base_stat
      }))

    return this
  }

  build () {
    return this.pokemon
  }
}
