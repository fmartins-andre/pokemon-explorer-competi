export default interface Pokemon {
  id: number
  name: string
  baseExperience: number
  types: string[]
  image: string
  height?: number
  weight?: number
}
