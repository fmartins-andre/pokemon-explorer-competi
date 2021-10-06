import { FunctionComponent, MouseEventHandler } from 'react'
import { useRouter } from 'next/router'
import pokedexController from '../../controller/pokedex'

const AddPokemon: FunctionComponent<{name: string}> = props => {
  const { name, children, ...other } = props
  const router = useRouter()

  const onAddToPokedexClick: MouseEventHandler = (event) => {
    event.preventDefault()

    const pokedex = pokedexController().add([name])

    console.info(
      pokedex
        ? `Added ${name} to your pokedex: \n- ${pokedex.join('\n- ')}`
        : `You need to login to add ${name} to your pokedex`
    )

    if (!pokedex) {
      console.info(`You need to login to add ${name} to your pokedex`)
      router.push('/session')
    } else {
      console.info(`Added ${name} to your pokedex: \n- ${pokedex.join('\n- ')}`)
      router.push('/pokedex')
    }
  }

  return (
    <a {...other} onClick={onAddToPokedexClick}>{children}</a>
  )
}

export default AddPokemon
