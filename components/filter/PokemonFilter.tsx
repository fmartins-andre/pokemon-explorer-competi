import { ChangeEventHandler, FunctionComponent, useState, useEffect } from 'react'
import styles from './PokemonFilter.module.css'

import queriesStore from '../../redux'

const PokemonFilter: FunctionComponent<{types: string[], onChangeFilter: ChangeEventHandler }> = (props) => {
  const [type, setType] = useState<string>()

  useEffect(setTypeState, [])
  queriesStore.subscribe(setTypeState)

  function setTypeState () {
    const state = queriesStore.getState()
    setType(state.variables.type)
  }

  const options = props.types.map(
    (type, index) => <option key={index} value={type}>{type}</option>
  )

  return (
    <div className={styles.container}>
      <div className={styles.formControl}>

        <label htmlFor="pokemonType">filter</label>
        <select name="pokemonType" id="pokemonType" onChange={props.onChangeFilter} value={type}>
          <option value="">-- all --</option>
          {options}
        </select>

      </div>
  </div>
  )
}

export default PokemonFilter
