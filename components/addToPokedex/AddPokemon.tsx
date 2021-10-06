import { FunctionComponent } from 'react'
import pokedexController from '../../controller/pokedex'

const AddPokemon: FunctionComponent<{name: string}> = props => {
  const { name, children, ...other } = props

  const onAddToPokedexClick = () => {
    console.log(
      pokedexController().add([name])
        ? `Added ${name} to your pokedex`
        : `You need to login to add ${name} to your pokedex`
    )
  }

  return (
    <a {...other} onClick={onAddToPokedexClick}>{children}</a>
  )
}

export default AddPokemon
