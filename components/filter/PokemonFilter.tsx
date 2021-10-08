import { ChangeEventHandler, FunctionComponent } from 'react'

import styles from './PokemonFilter.module.css'

const PokemonFilter: FunctionComponent<{types: string[], onChangeFilter: ChangeEventHandler }> = (props) => {
  const options = props.types.map(
    (type, index) => <option key={index} value={type}>{type}</option>
  )

  return (
    <div className={styles.container}>
      <div className={styles.formControl}>

        <label htmlFor="pokemonType">filter</label>
        <select name="pokemonType" id="pokemonType" onChange={props.onChangeFilter}>
          <option value="">-- all --</option>
          {options}
        </select>

      </div>
  </div>
  )
}

export default PokemonFilter
